export const EventColors = ['blue', 'grey', 'green', 'orange'] as const;
export type EventColor = (typeof EventColors)[number];

export const eventCategoryColorMap: Record<EventColor, string> = {
    blue: '#048BA8',
    grey: '#2F2D2E',
    green: '#99C24D',
    orange: '#F18F01'
};

export const eventCategoryColorTranslator: Record<EventColor, string> = {
    blue: 'Blå',
    grey: 'Grå',
    green: 'Grønn',
    orange: 'Oransje'
};
