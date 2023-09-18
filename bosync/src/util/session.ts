import { User } from '../types/user';

export const saveUser = (user: User) => {
    sessionStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
    const user = sessionStorage.getItem('user');
    if (!user) return null;
    return JSON.parse(user);
};
