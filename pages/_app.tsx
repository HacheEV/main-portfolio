import type { AppProps } from "next/app";
import '../styles/glogals.css'
import DarkModeContext from "../context/mode-context";
import {useReducer, useState} from "react";
import ThemeContext, { Colors } from "../context/theme-context/theme-context";
import {initialState, reducer} from "../context/theme-context/theme-reducer";


function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true)
  const [theme, dispatch] = useReducer<any>(reducer, initialState)
  return (
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
          <ThemeContext.Provider value={{theme, dispatch}}>
              <Component {...pageProps} />
          </ThemeContext.Provider>
      </DarkModeContext.Provider>
  )
}

export default MyApp
