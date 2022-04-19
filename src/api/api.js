import axios from "axios";
import router from "../router";
export var api = axios.create({
  headers: {
    "Content-type": "application/json",
  },
  baseURL: 'https://bc22-95-179-127-177.ngrok.io',
  responseType: "json",
});

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
