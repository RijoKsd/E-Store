import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.jsx'
import { Provider } from 'react-redux'
import PopupProvider from './context/PopupContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PopupProvider>
        <App />
      </PopupProvider>
     
    </Provider>
   </React.StrictMode>,
)
