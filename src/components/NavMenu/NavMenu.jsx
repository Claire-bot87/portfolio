import {Routes, Route, Link } from 'react-router'
import './NavMenu.css'
import { useEffect } from 'react'
import TitleComponent from '../../components/TitleComponent/TitleComponent.jsx'
import NavComponent from '../../components/NavComponent/NavComponent.jsx'


export default function NavMenu () {
    useEffect(() => {
        console.log("NavMenu is rendering!");
      }, [])
    return (
<div className='nav-menu'>
    <TitleComponent />
    <NavComponent />
      </div>
    )
}

