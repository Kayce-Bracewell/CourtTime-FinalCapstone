const _apiUrl = "/api/court";

export const getCourts = () => {
    return fetch(`${_apiUrl}`).then(res => res.json())
}

export const getCourtById = (id) => {
    return fetch(`${_apiUrl}/${id}`).then(res => res.json())
}