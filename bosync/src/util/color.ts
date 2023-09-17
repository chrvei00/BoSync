export const EventColors = ['blue', 'red', 'green', 'yellow'] as const;
export type EventColor = (typeof EventColors)[number];

export const eventCategoryColorMap: Record<EventColor, string> = {
    blue: '#048BA8',
    red: '#2F2D2E',
    green: '#99C24D',
    yellow: '#F18F01'
};

export const eventCategoryColorTranslator: Record<EventColor, string> = {
    blue: 'Blå',
    red: 'Rød',
    green: 'Grønn',
    yellow: 'Gul'
};
