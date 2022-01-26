import { createContext } from 'react';

export enum Colors {
    GREEN = 'green',
    PINK = 'pink',
    YELLOW = 'yellow',
    RED = 'red',
}

const ThemeContext = createContext<any>(null);

export default ThemeContext;