import { Provider } from 'react-redux'; 
import { persistor, store } from './stores'
import { AppRouter } from './routes'
import { PersistGate } from 'redux-persist/integration/react';


function HideshiApp() {
  

  return (
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter/>
      </PersistGate>
    </Provider>
  )
}

export default HideshiApp
