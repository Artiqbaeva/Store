import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context/index.jsx'
import { reducer, initialState } from './context/reducer.js'
import { Provider } from 'react-redux';
import store from './redux/store';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <ContextProvider initialState={initialState} reducer={reducer}>
         <Provider store={store}>
             <App />
          </Provider>
      </ContextProvider>
  </BrowserRouter> 
)
