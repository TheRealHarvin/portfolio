import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Experience from './pages/Experience/index.jsx'
import Projects from './pages/Projects/index.jsx'
import CurriculumVitae from './pages/Curriculum-vitae/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
    <CurriculumVitae/>
  </StrictMode>,
)
