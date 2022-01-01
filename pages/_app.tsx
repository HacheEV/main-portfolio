import type { AppProps } from "next/app";
import '../styles/glogals.css'
import '../styles/utils.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
