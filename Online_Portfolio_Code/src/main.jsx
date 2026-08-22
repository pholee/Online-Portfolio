import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import App from './App.jsx'
import './index.css'

import "@fontsource/unbounded/500.css"
import "@fontsource/unbounded/700.css"
import "@fontsource/unbounded/800.css"
import "@fontsource/unbounded/900.css"
import "@fontsource/hanken-grotesk/400.css"
import "@fontsource/hanken-grotesk/500.css"
import "@fontsource/hanken-grotesk/600.css"
import "@fontsource/hanken-grotesk/700.css"
import "@fontsource/ibm-plex-mono/400.css"
import "@fontsource/ibm-plex-mono/500.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
