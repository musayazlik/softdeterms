import 'quill/dist/quill.snow.css'
import '../styles/globals.scss'
import '../styles/header.scss'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import MaintenanceMode from '../components/maintenanceMode'
import { wrapper } from 'store'
import { Provider } from 'react-redux'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const { store } = wrapper.useWrappedStore(pageProps)
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true') {
    return <MaintenanceMode />
  } else {
    return (
      <Provider store={store}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    )
  }
}

export default App
