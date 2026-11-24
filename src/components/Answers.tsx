import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import type { SurveyData, QuestionData, AnswerData } from "../types";
import { getQuestionsById, getSurveyById, getAnswerById } from "../surveyapi";
import { TextField } from "@mui/material";
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
      .catch(error => console.error(error));
    getQuestionsById(id)
      .then(data => setQuestions(data))
      .catch(error => console.error(error))
  }, [id]);

// defaultValue="vastaus" -> tämä laittaa valmiin tekstin tekstikenttään

  return (
    <>

      <div>
        <h1>{survey?.name}</h1>
        <p>{survey?.description}</p>
        <ol className="Survey">
          {questions?.map((q, i) => <li key={i}>{q.question}<br />
            <TextField
              multiline
              id="outlined-multiline-flexible"
              className="vastauslaatikko"
              defaultValue={getAnswerById(i)}
              disabled
               /></li>)}
        </ol>
      </div>

      <div>
        <button onClick={() => navigate("/")}>Takaisin</button>

        <button onClick={() => SubmitEvent}>Tallenna</button>
      </div>
      {/* Ei toimi vielä, toiminnallisuus??? */}
      <> </>



    </>
  )
}

export default Answers