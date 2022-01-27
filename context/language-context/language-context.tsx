import { createContext } from 'react';

export enum Language {
    ESP = 'ESP',
    EN = 'EN'
}

const LanguageContext = createContext<any>(Language.ESP);

export default LanguageContext;