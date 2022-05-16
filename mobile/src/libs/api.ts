import axios from 'axios';


export const api = axios.create({
    baseURL: 'http://181.213.132.2:3333',
});