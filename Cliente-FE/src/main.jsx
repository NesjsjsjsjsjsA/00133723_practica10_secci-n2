import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './Style/index.css'
import Log from './log.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Log />
  </StrictMode>,
)

