import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppContextProvider from './AppContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
)
