const url = "https://api.quotable.io/random";

export const fetchApiData = () => {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
};