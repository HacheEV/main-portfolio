import type { AppProps } from "next/app";
import '../styles/glogals.css'
import '../styles/utils.css'
import DarkModeContext from "../context/mode-context";
import {useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true)
  return (
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
        <Component {...pageProps} />
      </DarkModeContext.Provider>
  )
}

export default MyApp
