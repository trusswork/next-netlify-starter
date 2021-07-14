import '@styles/globals.css'
import { Provider as AuthProvider } from 'next-auth/client'

function Application({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session} >
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default Application
