import axios from "axios";


const hideshiApiFormData = axios.create({
    baseURL:'http://localhost:4000/api/v1'
});


hideshiApiFormData.interceptors.request.use( config => {
    config.headers = {
        ...config.headers,
        "Content-Type":"multipart/form-data",
        "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjczOTkyMTEyLCJleHAiOjE2NzQwNzg1MTJ9.TwVd86wWRccN0hPjQMYY8PiJ7Q04DVLE5nZKILGGjaE"
    }

    return config;
})

export default hideshiApiFormData;