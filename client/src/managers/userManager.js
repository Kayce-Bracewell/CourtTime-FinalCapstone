const _apiUrl = "/api/userprofile"

export const updateUserProfile = async (id, editedProfile) => {
    const response = await fetch(`${_apiUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedProfile)
    })

    return response.json;
}