export function getSurveys() {
    return fetch(import.meta.env.VITE_API_URL + '/api/surveys') 
        .then(response => {
            if (!response.ok) {
                throw new Error("Error when fetching surveys");
            }

            return response.json();
        })
}

export function getSurveyById(id: number | string) {
    return fetch(`${import.meta.env.VITE_API_URL}/api/survey/${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Error when fetching survey");
            return response.json();
        });
}

export function getQuestionsById(id: number | string) {
    return fetch(`${import.meta.env.VITE_API_URL}/api/questions/${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Error when fetching survey");
            return response.json();
        });

}

export function getAnswerById(id: number | string) {
    return fetch(`${import.meta.env.VITE_API_URL}/api/answer/${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Error when fetching survey");
            return response.json();
        });
    }
