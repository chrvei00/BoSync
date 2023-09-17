import { Event, User } from '../types/event';

export const mockUsers: User[] = [
    {
        id: 'id1',
        name: 'John Doe',
        email: ''
    },
    {
        id: 'id2',
        name: 'Jane Doe',
        email: ''
    }
];

export const mockEvents: Event[] = [
    {
        id: 'ddadwawdawdawdawddawdaw',
        date: new Date(2020, 0, 1),
        title: 'New Year',
        description: 'Happy new year!',
        location: 'Home',
        isRepeating: true,
        repeatIntervalInDays: 365,
        repeatCount: 1,
        responsible: mockUsers,
        currResponsible: mockUsers[0],
        category: 'annet'
    },
    {
        id: 'ddadwawdawdawdawddawdaw2',
        date: new Date(2020, 5, 1),
        title: 'Vaske dass',
        description: 'Kos',
        location: 'Toalett',
        isRepeating: true,
        repeatIntervalInDays: 7,
        repeatCount: 1,
        responsible: mockUsers,
        category: 'vask'
    },
    {
        id: 'ddadwawdawdawdawddawdaw3',
        date: new Date(2020, 5, 1),
        title: 'Vaske Toalett',
        description: ':)',
        location: 'Toalett',
        isRepeating: true,
        repeatIntervalInDays: 7,
        repeatCount: 1,
        responsible: mockUsers,
        category: 'rydding'
    }
];
