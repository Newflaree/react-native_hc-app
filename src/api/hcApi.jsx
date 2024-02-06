import axios from 'axios';

const baseURL = 'http://192.168.1.85:3002/api';

const hcApi = axios.create({ baseURL });


export default hcApi;
