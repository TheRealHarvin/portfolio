import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Experience from './pages/Experience/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <About/>
    <Experience/>
  </StrictMode>,
)
