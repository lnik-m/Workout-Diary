import '@/styles/globals.scss'
import { store, persistor } from '@/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { MantineProvider } from '@mantine/core'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            globalStyles: () => ({
              body: {
                fontFamily: 'Nunito',
                fontSize: '20px',
                primaryColor: 'grape',
                backgroundColor: '#363062',
                color: '#E9D5CA'
              }
            })
          }}
        >
          <Component {...pageProps} />
        </MantineProvider>
      </PersistGate>
    </Provider>
  )
}

// noinspection JSUnusedGlobalSymbols
export default MyApp
