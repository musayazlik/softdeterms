import '../styles/globals.scss'
import '../styles/header.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import MaintenanceMode from '../components/maintenanceMode'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true') {
    return <MaintenanceMode />
  } else {
    return (
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
  }
}
