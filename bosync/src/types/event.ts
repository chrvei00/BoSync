export interface Event {
    id: string;
    date: Date;
    title: string;
    description: string;
    location: string;
    isRepeating: boolean;
    repeatIntervalInDays: number; // in days
    repeatCount: number;
    currResponsible?: User;
    responsible: User[];
    category: EventCategory;
}

export type EventCategory = 'vask' | 'kos' | 'rydding' | 'annet';

export interface User {
    id: string;
    name: string;
    email: string;
}
