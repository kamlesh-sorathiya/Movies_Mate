import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UseScrollTop from './hooks/useScrollTop.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UseScrollTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
