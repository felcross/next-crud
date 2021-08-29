import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {AuthProvider} from '../contexts/AuthContent.js'


function MyApp({ Component, pageProps }) {  
  return (
  <AuthProvider>
  <Component {...pageProps} />
  </AuthProvider>)
}

export default MyApp
