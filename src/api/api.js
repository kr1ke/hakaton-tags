import axios from "axios";
import router from "../router";
export var api = axios.create({

    headers: {
        "Content-type": "application/json",
    },
    baseURL: 'http://localhost:5000',
    responseType: "json",
})

// проверка авториации при каждом запросе
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            // AuthServices.logout();
            router.push('/auth')
            localStorage.clear()

        }
        return error;
    }
);
