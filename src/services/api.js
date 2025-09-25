
import axios from 'axios'


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '398cd0d39741f31ed8e8097b3636b56b',
        language: 'pt-BR',
        page: 1
//essa é a base da api
    }
}) 

export default api 