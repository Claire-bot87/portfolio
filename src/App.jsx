import {Routes, Route, Link, useLocation } from 'react-router'
// import AboutMeCard from './components/AboutMeCard'
import BioContainer from './components/BioContainer/BioContainer.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'
// import DevCard from './components/DevCard'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import NavMenu from './components/NavMenu/NavMenu.jsx'
import HomePageComponent from './components/HomePageComponent/HomePageComponent.jsx'
import { useEffect } from "react"


import './App.css'
function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.className = location.pathname === "/" ? "home-bg" : "other-bg";
  }, [location]);


  return (
    <>
    <div className="app-div">
    <NavMenu />
  

     <Routes>
<Route path="/" element = {<HomePageComponent />}/>
<Route path="/portfolio" element = {<Portfolio />} />
<Route path="/bio" element = {<BioContainer />} />
<Route path="/contact" element = {<ContactForm />} />

     </Routes>
     </ div>
   
    </>
  )
}

export default App
