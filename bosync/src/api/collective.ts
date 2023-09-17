import axios from 'axios';
import { Collective } from '../types/collective';
axios.defaults.baseURL = 'http://localhost:3001/api/collective/';

export async function getAllCollectives() {
    const response = await axios.get('all');
    return response.data;
}

export async function getCollectiveByName(collectiveName: string) {
    const response = await axios.get(`/name/${collectiveName}`);
    return response.data;
}

export async function getCollectiveById(id: string) {
    const response = await axios.get(`/id/${id}`);
    return response.data;
}

export async function createCollective(collective: Collective) {
    const response = await axios.post('create', collective);
    return response.data;
}

export async function updateCollective(collective: Collective) {
    const response = await axios.put(`update/${collective.id}`, collective);
    return response.data;
}
