import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import type { SurveyData } from "../types";
import { getSurveyById } from "../surveyapi";


function Survey() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [survey, setSurvey] = useState<SurveyData | null>(null);

  useEffect(() => {
    if (!id) return;
    getSurveyById(id)
      .then(data => setSurvey(data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <>

      <div>
        <h1>{survey?.name}</h1>
        <p>{survey?.description}</p>
        <ol>
          {survey?.questions?.map((q, i) => <li key={i}>{q}</li>)}
        </ol>
      </div>

     
      <button onClick={() => navigate("/")}>Takaisin</button>
      <> </>
      
    

    </>
  )
}

export default Survey
