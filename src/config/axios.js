import axios from "axios"
require('dotenv').config()
axios.defaults.baseURL = process.env.BACK_END_URL
