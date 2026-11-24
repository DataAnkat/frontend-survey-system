import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import type { SurveyData, QuestionData } from "../types";
import { getQuestionsById, getSurveyById } from "../surveyapi";
import { TextField } from "@mui/material";
import '../Survey.css';


function Survey() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [survey, setSurvey] = useState<SurveyData | null>(null);
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);

  useEffect(() => {
    if (!id) return;
    getSurveyById(id)
      .then(data => setSurvey(data))
      .catch(error => console.error(error));
    getQuestionsById(id)
      .then(data => setQuestions(data))
      .catch(error => console.error(error))
  }, [id]);

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
              className="vastauslaatikko" /></li>)}
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

export default Survey
