import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f796b-default-rtdb.firebaseio.com/'
});

export default instance;