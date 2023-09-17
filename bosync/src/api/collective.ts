import axios from 'axios';
import { Collective } from '../types/collective';
axios.defaults.baseURL = 'http://localhost:3001/api/collective/';

const colAxios = axios.create({
    baseURL: 'http://localhost:3001/api/collective/',
    withCredentials: true
});

export async function getAllCollectives() {
    const response = await colAxios.get('all');
    return response.data;
}

export async function getCollectiveByName(collectiveName: string) {
    const response = await colAxios.get(`/name/${collectiveName}`);
    return response.data;
}

export async function getCollectiveById(id: string) {
    const response = await colAxios.get(`/id/${id}`);
    return response.data;
}

export async function createCollective(collective: Collective) {
    const response = await colAxios.post('create', collective);
    return response.data;
}

export async function updateCollective(collective: Collective) {
    const response = await colAxios.post(`update/${collective._id}`, collective);
    return response.data;
}
