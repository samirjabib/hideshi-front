import axios from "axios";


const hideshiApi = axios.create({
    baseURL:'https://hideshi-store.onrender.com/api/v1'
});


hideshiApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        // "Content-type": "application/json",
        "x-token": localStorage.getItem('token')
    }

    return config;
})

export default hideshiApi;