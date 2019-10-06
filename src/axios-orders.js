import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-32e14.firebaseio.com/'
});

export default instance;