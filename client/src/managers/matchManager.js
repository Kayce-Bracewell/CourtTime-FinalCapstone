const _apiUrl = "/api/match";

export const CreateMatch = async (matchObj) => {
    const response = await fetch(`${_apiUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(matchObj)
    })

    return response.json();
}

export const getMatchById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then(res => res.json())
}