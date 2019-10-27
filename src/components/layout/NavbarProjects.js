import React from 'react'
import { NavLink, Link } from 'react-router-dom'


const NavbarProjects = (props) => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper blue accent-2 navbar-fixed">
                <div className="container">
                    <Link to='/' className="brand-logo" onClick={props.toHome}>
                        <i className="material-icons left">person_pin</i>My Page
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink to='/' onClick={props.toHome}>Home</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavbarProjects
