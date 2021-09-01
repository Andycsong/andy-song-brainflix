import axios from "axios"

export const API_URL = 'https://project-2-api.herokuapp.com'
export const API_KEY = "?api_key=04c2a75c-f8b6-459d-a765-7672191d3de8"


export const API_CALLS = {

    getVideos: () => axios.get(`${API_URL}/videos/${API_KEY}`),
    getDetailedVideos: (id) => axios.get(`${API_URL}/videos/${id}${API_KEY}`),
}

