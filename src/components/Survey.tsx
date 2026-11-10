import { useState, useEffect } from "react";
import type { SurveyData } from "../types";


function Survey() {
  const [survey, setSurveys] = useState<SurveyData| null>();
  const id=survey?.id;
      useEffect(() => {
        fetch(`http://localhost:8080/api/surveys/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Survey not found");
                }
                return response.json();
            })
            .then(data => setSurveys(data))
            .catch(error => console.error(error));
    }, []);

      const handleDelete=()=>{
        fetch(`http://localhost:8080/api/surveys/${id}`,{
          method:'DELETE'
      })
      .then(response => {
                if (!response.ok) {
                    throw new Error("Poisto epäonnistui");
                }
                return response.json();
            })
        
      }

  return (
    <>
  <div>
    <h1>{survey?.name}</h1>
  </div>

  <button onClick={handleDelete}>
    Poisto
  </button>
    </>
  )
}

export default Survey
