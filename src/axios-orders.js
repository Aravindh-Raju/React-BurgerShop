import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-bdd80.firebaseio.com/'
});

export default instance;