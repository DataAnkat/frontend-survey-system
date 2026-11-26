import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import type { SurveyData, QuestionData, NewAnswer } from "../types";
import { getQuestionsById, getSurveyById, saveAnswers } from "../surveyapi";
import { TextField } from "@mui/material";
import '../Survey.css';


function Survey() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [survey, setSurvey] = useState<SurveyData | null>(null);
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  // vastaukset kysymyksen id:n mukaan: { [questionId]: "vastaus" }
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => {
    if (!id) return;
    getSurveyById(id)
      .then(surveyData => setSurvey(surveyData))
      .catch(error => console.error(error))
    getQuestionsById(id)
      .then(questionList => setQuestions(questionList))
      .catch(error => console.error(error))

  }, [id]);

  // 
  const handleAnswerChange = (questionId: number, newText: string) => {
    setAnswers(previousAnswers => ({ ...previousAnswers, [questionId]: newText }));
  };

  const saveData = () => {
    const answersToSave: NewAnswer[] = Object.entries(answers)
      .filter(([, answerText]) => answerText.trim() !== "")
      .map(([questionId, answerText]) => ({
        answer: answerText,
        question: { id: Number(questionId) },
      }));

    if (answersToSave.length === 0) return;

    saveAnswers(answersToSave)
      .then(() => {
        setAnswers({});
        navigate("/");
      })
      .catch(error => console.error(error));
  };

  return (
    <>

      <div>
        <h1>{survey?.name}</h1>
        <p>{survey?.description}</p>
        <ol className="Survey">
          {questions?.map(question => (
            <li key={question.id}>
              {question.question}
              <br />
              <TextField
                multiline
                className="vastauslaatikko"
                value={answers[question.id] ?? ""}
                onChange={event => handleAnswerChange(question.id, event.target.value)}
              />
            </li>
          ))}
        </ol>
      </div>

      <div>
        <button onClick={() => navigate("/")}>Takaisin</button>

        <button onClick={saveData}>Tallenna</button>
      </div>

    </>
  )
}

export default Survey
