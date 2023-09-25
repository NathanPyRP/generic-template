import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '@/data/context/AppContext'
import { AuthProvider } from '@/data/context/AuthContext'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  )
}
