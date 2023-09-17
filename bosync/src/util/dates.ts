import { format } from 'date-fns';
import nb from 'date-fns/locale/nb';

export const formats = {
    short: 'eee. d MMM Y'
};

export const locale = { locale: nb };

export const localeFormat = (date: Date, f: keyof typeof formats) => {
    return format(date, formats[f], locale);
};
