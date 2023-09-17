export interface Event {
    name: string;
    description: string;
    deadline: Date;
    completed: boolean;
    assigned: string;
    isRepeating: boolean;
    repeatInterval: number;
    repeatIntervalCount: string;
    category: string;
}

export interface Collective {
    _id: string;
    date: Date;
    name: string;
    members: string[];
    event: Event[];
}
