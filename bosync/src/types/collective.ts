export interface Event {
    name: string;
    description: string;
    deadline: string;
    completed: boolean;
    assigned: string;
    isRepeating: boolean;
    repeatInterval: number;
    repeatIntervalCount: string;
    category: string;
    _id?: string;
}

export interface Collective {
    _id: string;
    date: Date;
    name: string;
    members: string[];
    event: Event[];
}
