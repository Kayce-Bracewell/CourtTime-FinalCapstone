const _apiUrl = "/api/court";

export const getCourts = () => {
    return fetch(`${_apiUrl}`).then(res => res.json())
}