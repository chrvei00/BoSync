import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/api/user/';

export async function getIsAuth() {
    const response = await axios.get('auth');
    return response.data;
}

export async function getLogin(username: string, password: string) {
    const response = await axios.post(`/auth`, { username, password });
    return response.data;
}

export async function getLogout() {
    const response = await axios.delete('/auth');
    return response.data;
}

export async function getRegister(username: string, password: string) {
    const response = await axios.post('/register', { username, password });
    return response.data;
}
