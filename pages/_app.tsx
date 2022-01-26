import type { AppProps } from "next/app";
import '../styles/glogals.css'
import DarkModeContext from "../context/mode-context";
import {useReducer, useState} from "react";
import ThemeContext, { Colors } from "../context/theme-context/theme-context";
import {initialState, themeReducer} from "../context/theme-context/theme-reducer";
import LanguageContext from "../context/language-context/language-context";
import {languageInitialState, languageReducer} from "../context/language-context/language-reducer";


function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true)
  const [theme, dispatchTheme] = useReducer<any>(themeReducer, initialState)
  const [language, dispatchLanguage] = useReducer<any>(languageReducer, languageInitialState)
  return (
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
          <ThemeContext.Provider value={{theme, dispatchTheme}}>
              <LanguageContext.Provider value={{language, dispatchLanguage}}>
                  <Component {...pageProps} />
              </LanguageContext.Provider>
          </ThemeContext.Provider>
      </DarkModeContext.Provider>
  )
}

export default MyApp
