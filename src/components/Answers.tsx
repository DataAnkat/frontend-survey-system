import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import type { SurveyData, QuestionData, AnswerData } from "../types";
import { getQuestionsById, getSurveyById, getAnswers } from "../surveyapi";
import '../Survey.css';


function Answers() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [survey, setSurvey] = useState<SurveyData | null>(null);
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [answers, setAnswers] = useState<AnswerData[] | null>(null);

  useEffect(() => {
    if (!id) return;
    getSurveyById(id)
      .then(data => setSurvey(data))
      .catch(error => console.error(error))
    getQuestionsById(id)
      .then(data => setQuestions(data))
      .catch(error => console.error(error))
    getAnswers()
      .then(data => setAnswers(data))
      .catch(error => console.error(error)
      )

  }, [id]);

  // tämän pitää palauttaa useampi vastaus ja sitten heittää hienoon mutoon
  const displayAnswers = (questionId: number) => {
    return answers?.filter(answer => answer.question?.id === questionId) ?? [];
  }

// defaultValue="vastaus" -> tämä laittaa valmiin tekstin tekstikenttään

  return (
    <>

      <div>
        <h1>{survey?.name}</h1>
        <p>{survey?.description}</p>
        <ol className="Survey">
          {questions?.map(question => (
            <li key={question.id}>
                {question.question}
                <ul>
                  {displayAnswers(question.id).map(ans => (
                    <li key={ans.id}>{ans.answer}</li>
                  ))}
                </ul>
            </li>
            ))}
        </ol>
      </div>

      <div>
        <button onClick={() => navigate("/")}>Takaisin</button>
      </div>
      {/* Ei toimi vielä, toiminnallisuus??? */}
      <> </>



    </>
  )
}

export default Answers
