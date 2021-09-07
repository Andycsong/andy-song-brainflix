import axios from "axios"


// export const API_URL = 'https://project-2-api.herokuapp.com'
const API_KEY = "?api_key=04c2a75c-f8b6-459d-a765-7672191d3de8"


export const API_URL = 'http://localhost:'
export const API_END_POINT = 'videos'


export const PORT = '8080/'






export const API_CALLS = {

    getVideos: () => axios.get(`${API_URL}${PORT}${API_END_POINT}`),
    getDetailedVideos: (id) => axios.get(`${API_URL}${PORT}${API_END_POINT}/${id}`),
    postComments: (id, comment) => axios.post(`${API_URL}${PORT}${API_END_POINT}/${id}/comments`, comment),
    deleteComments: (id, commentId) => axios.delete(`${API_URL}${PORT}${API_END_POINT}/${id}/comments/${commentId}`)
}
