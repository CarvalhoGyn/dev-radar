import Axios from 'axios';

const api = Axios.create({
    baseURL: 'http://192.168.5.234:3333'
});

export default api;