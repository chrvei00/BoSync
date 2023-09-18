export enum SetInterval {
    NONE = 1,
    DAY = 2,
    WEEK = 3,
    MONTH = 4,
    YEAR = 5
}

export const repeatingIntervalTranslator: Record<SetInterval, string> = {
    [SetInterval.NONE]: 'Aldri',
    [SetInterval.DAY]: 'Dag',
    [SetInterval.WEEK]: 'Uke',
    [SetInterval.MONTH]: 'Måned',
    [SetInterval.YEAR]: 'År'
};

export const isIntervalModulo = (d1: Date, d2: Date, interval: SetInterval): boolean => {
    switch (interval) {
        case SetInterval.DAY:
            return true;
        case SetInterval.WEEK:
            return d1.getDay() === d2.getDay();
        case SetInterval.MONTH:
            return d1.getDate() === d2.getDate();
        case SetInterval.YEAR:
            return d1.getDay() === d2.getDay() && d1.getDate() === d2.getDate();
        case SetInterval.NONE:
            return false;
    }
};
