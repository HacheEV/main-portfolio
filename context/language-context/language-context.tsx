import { createContext } from 'react';

export enum Language {
    ESP = 'green',
    EN = 'pink'
}

const LanguageContext = createContext<any>(Language.ESP);

export default LanguageContext;