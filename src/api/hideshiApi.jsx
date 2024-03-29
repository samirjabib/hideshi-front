import axios from "axios";
// http://192.168.1.3:4000/
// https://hideshi-store.onrender.com/api/v1

const hideshiApi = axios.create({
    baseURL:'https://hideshi-backend.onrender.com/api/v1'
});


hideshiApi.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        "Content-type": "application/json",
        "authorization": localStorage.getItem('token')
    }

    return config;
})

export default hideshiApi;