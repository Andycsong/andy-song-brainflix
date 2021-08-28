import axios from "axios"

const API_URL = 'https://project-2-api.herokuapp.com'
const API_KEY = "?api_key=0fc5633c-00c2-4ab2-9753-e619f65b9bbc"


export const API_CALLS = {

    getVideos: () => axios.get(`${API_URL}/videos/${API_KEY}`),
    getDetailedVideos: (id) => axios.get(`${API_URL}/videos/${id}${API_KEY}`)
}