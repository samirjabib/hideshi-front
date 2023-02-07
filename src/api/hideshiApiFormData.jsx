import axios from "axios";


const hideshiApiFormData = axios.create({
    baseURL:'http://192.168.1.3:4000/api/v1'
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