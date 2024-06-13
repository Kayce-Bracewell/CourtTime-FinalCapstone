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

export const getUserMatches = (userId) => {
    return fetch(`${_apiUrl}/user/${userId}`).then(res => res.json())
}

export const deleteMatchById = (matchId) => {
    return fetch(`${_apiUrl}/${matchId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export const editMatch = (matchObj) => {
    return fetch(`${_apiUrl}/edit`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(matchObj)
    })
}

export const getMatchesByCourtId = (courtId) => {
    return fetch(`${_apiUrl}/court/${courtId}`).then(res => res.json())
}