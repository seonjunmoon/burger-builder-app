import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-765a3.firebaseio.com/'
});

export default instance;