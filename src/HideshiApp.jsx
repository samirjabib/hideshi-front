import { Provider } from 'react-redux'; 
import { store } from './stores'
import { AppRouter } from './routes'


function HideshiApp() {
  

  return (
    <Provider store={ store }>
      <AppRouter/>
    </Provider>
  )
}

export default HideshiApp
