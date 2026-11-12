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

  // const handleDelete = () => {
  //   fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
  //     method: 'DELETE'
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error("Poisto epäonnistui");
  //       }
  //       navigate("/");
  //     })
  //     .catch(error => console.error(error));
  // }



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
      <button onClick={() => navigate("/editSurvey")}> Edit </button>
      
    

    </>
  )
}

export default Survey
