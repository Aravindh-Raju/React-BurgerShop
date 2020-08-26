import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://YOUR_KEY/'
});

export default instance;
