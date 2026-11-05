export function getSurveys() {
    return fetch(import.meta.env.VITE_API_URL) 
        .then(response => {
            if (!response.ok) {
                throw new Error("Error when fetching surveys");
            }

            return response.json();
        })
}