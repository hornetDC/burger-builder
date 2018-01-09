import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://udemy-burger-builder-9c5c1.firebaseio.com/'
});

export default instance;