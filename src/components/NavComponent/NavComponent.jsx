import {Routes, Route, Link } from 'react-router'
import './NavComponent.css'




export default function NavComponent () {
   
    return (
        <>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/bio">bio</Link>
        <Link to="/contact">contact</Link>
        </>
    )
}
