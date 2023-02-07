import axios from "axios";


const hideshiApiFormData = axios.create({
    baseURL:'https://hideshi-backend.onrender.com/api/v1'
});


hideshiApiFormData.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        "Content-Type":"multipart/form-data",
        "authorization": localStorage.getItem('token')
    }

    return config;
})


export default hideshiApiFormData;