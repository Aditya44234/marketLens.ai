export async function analyzeRealEstate({ file, query }) {
    const formData = new FormData();

    const URL = import.meta.env.VITE_BASE_URL || 'http://127.0.0.1:8000/api/analyze/';

    formData.append('file', file);

    formData.append('query', query);


    const response = await fetch(URL, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Network response was not ok");
    }

    return response.json();

}