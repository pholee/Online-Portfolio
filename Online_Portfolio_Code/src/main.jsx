import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import App from './App.jsx'
import './index.css'

import "@fontsource-variable/geist"
import "@fontsource/geist-mono/400.css"
import "@fontsource/geist-mono/500.css"
import "@fontsource/instrument-serif/400.css"
import "@fontsource/instrument-serif/400-italic.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
