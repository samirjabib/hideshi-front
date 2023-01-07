import axios from "axios";


const hideshiApi = axios.create({
    baseURL:process.env.HIDESHI_API_URL
});


hideshiApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        "x-token": localStorage.getItem('token')
    }

    return config;
})

export default hideshiApi;