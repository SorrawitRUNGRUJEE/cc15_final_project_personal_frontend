import axios from "axios"
import { BACKEND_URL } from "./env"
import {getAccessToken,removeAccessToken} from "../utils/localStorage"
axios.defaults.baseURL = BACKEND_URL
axios.interceptors.request.use( function(config) {
      const token = getAccessToken()
      if(token) {
          config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    );
  
    axios.interceptors.response.use( function (response) {
        return response} ,
        function (error)  {
          if (error.response.status === 401) {
            removeAccessToken();
            window.location.href = "/login";
          }
          return Promise.reject(error);
        }
      );


export default axios
