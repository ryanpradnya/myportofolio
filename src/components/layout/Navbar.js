import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue accent-2">
            <div className="container">
                <Link to='/' className="brand-logo">My Page</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#experience">Expirience</a></li>
                    <li><a href="#education">Edication</a></li>
                    <li><a href="#footer">Contact</a></li>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
