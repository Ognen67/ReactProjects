import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-dfcfb-default-rtdb.firebaseio.com/'
})

export default instance;
