import axios from "axios"

export const API_URL = 'https://project-2-api.herokuapp.com'
export const API_KEY = "?api_key=0fc5633c-00c2-4ab2-9753-e619f65b9bbc"


export const API_CALLS = {

    getVideos: () => axios.get(`${API_URL}/videos/${API_KEY}`),
    getDetailedVideos: (id) => axios.get(`${API_URL}/videos/${id}${API_KEY}`),
    // postComments: (id, commentName) => axios.post(`${API_URL}/videos/${id}/comments${API_KEY}`, commentName)
}

