import axios from 'axios';

export const key = '64f5d1dfdb9b3a6bf5ca87cae6a19bcc36d290ef';

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json'
},
});

export default api;