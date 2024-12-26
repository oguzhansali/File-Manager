import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:3000",
    //timeout: 5000, // 5 saniye zaman aşımı
    //headers: { "Content-Type": "application/json" },
})

export default instance;