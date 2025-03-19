import {Routes, Route, Link } from 'react-router'
// import AboutMeCard from './components/AboutMeCard'
import BioContainer from './components/BioContainer/BioContainer.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
// import DevCard from './components/DevCard'
import Portfolio from './components/Portfolio/Portfolio.jsx'
// import SkillsCard from './components/SkillsCard'

function App() {


  return (
    <>
    <nav> 

      <Link to="/">home</Link>
      <Link to="/portfolio">portfolio</Link>
      <Link to="/bio">bio</Link>
      <Link to="/contact">contact</Link>
    </nav>
     <h1>Hello world!</h1>

     <Routes>
<Route path="/" />
<Route path="/portfolio" element = {<Portfolio />} />
<Route path="/bio" element = {<BioContainer />} />
<Route path="/contact" element = {<ContactForm />} />

     </Routes>
    </>
  )
}

export default App
