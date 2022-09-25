const url = "https://api.quotable.io/random";

export const fetchQuoteData = () => {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => {
            throw error;
        });
};