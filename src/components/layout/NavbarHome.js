import React from 'react'
import { NavLink } from 'react-router-dom'

import bgnav from '../../img/blue-orange.jpg'
import avatar from '../../img/avatar.jpg'

const NavbarHome = (props) => {
    return (
        <div>
            <div className="navbar-fixed">
                <nav className="nav-wrapper blue accent-2 navbar-fixed">
                    <div className="container">
                        <a href="#header" className="brand-logo">
                            <i className="material-icons left">person_pin</i>My Page
                            </a>
                        <a href="#!" className="button-collapse" data-activates="slide-out">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#experience">Expiriences</a></li>
                            <li><a href="#skill">Skills</a></li>
                            <li><a href="#education">Edications</a></li>
                            <li><a href="#footer">Contact</a></li>
                            <li><NavLink to='/projects' onClick={props.toProjects}>Projects</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div>
                <ul className="side-nav" id="slide-out">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img className="responsive-img" src={bgnav} alt="" />
                            </div>
                            <img src={avatar} className="circle" alt="" />
                            <span className="white-text name">Gede Ryan Pradnya Prastika</span>
                        </div>
                    </li>
                    {/* LinkedIn */}
                    <li><a className="waves-effect orange-text text-accent-3" href="https://id.linkedin.com/in/gede-ryan-pradnya-prastika" target="_blank" rel="noopener noreferrer" onClick={props.hideSideNav}>
                        <i className="fa fa-linkedin-square orange-text text-accent-3" aria-hidden="true" />Linked In
                        </a></li>
                    {/* Github */}
                    <li><a className="waves-effect orange-text text-accent-3" href="https://github.com/ryanpradnya/" target="_blank" rel="noopener noreferrer" onClick={props.hideSideNav}>
                        <i className="fa fa-github orange-text text-accent-3" aria-hidden="true" />Git Hub
                        </a></li>
                    {/* Facebook */}
                    <li><a className="waves-effect orange-text text-accent-3" href="https://www.facebook.com/ryan.pradnya" target="_blank" rel="noopener noreferrer" onClick={props.hideSideNav}>
                        <i className="fa fa-facebook-square orange-text text-accent-3" aria-hidden="true" />Facebook
                        </a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="waves-effect" href="#experience" onClick={props.hideSideNav}>Expiriences</a></li>
                    <li><a className="waves-effect" href="#skill" onClick={props.hideSideNav}>Skills</a></li>
                    <li><a className="waves-effect" href="#education" onClick={props.hideSideNav} >Edications</a></li>
                    <li><a className="waves-effect" href="#footer" onClick={props.hideSideNav}>Contact</a></li>
                    <li><NavLink to='/projects' onClick={props.hideToProjects}>Projects</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarHome
