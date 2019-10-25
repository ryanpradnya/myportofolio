import React, { Component } from 'react'
import $ from 'jquery'
import { NavLink, Link } from 'react-router-dom'

import bgnav from '../../img/background-nav.png'
import avatar from '../../img/avatar.jpg'

class Navbar extends Component {
    componentDidMount() {

        $('.button-collapse').sideNav();

    }
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="nav-wrapper blue accent-2">
                    <div className="container">
                        <Link to='/' className="brand-logo">My Page</Link>
                        <a href="#" className="button-collapse" data-activates="slide-out">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#experience">Expirience</a></li>
                            <li><a href="#education">Edication</a></li>
                            <li><a href="#footer">Contact</a></li>
                            <li><NavLink to='/projects'>Projects</NavLink></li>
                        </ul>

                        <ul className="side-nav" id="slide-out">
                            <li>
                                <div className="user-view">
                                    <div className="background">
                                        <img src={bgnav} alt="" />
                                    </div>
                                    <img src={avatar} className="circle" alt="" />
                                    <span className="white-text name">Gede Ryan Pradnya Prastika</span>
                                </div>
                            </li>
                            {/* LinkedIn */}
                            <li><a className="orange-text text-accent-3" href="https://id.linkedin.com/in/gede-ryan-pradnya-prastika" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square orange-text text-accent-3" aria-hidden="true" />Linked In
                            </a></li>
                            {/* Github */}
                            <li><a className="orange-text text-accent-3" href="https://github.com/ryanpradnya/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github orange-text text-accent-3" aria-hidden="true" />Git Hub
                            </a></li>
                            {/* Facebook */}
                            <li><a className="orange-text text-accent-3" href="https://www.facebook.com/ryan.pradnya" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook-square orange-text text-accent-3" aria-hidden="true" />Facebook
                            </a></li>
                            <li><div className="divider"></div></li>
                            <li><a className="waves-effect" href="#experience">Expirience</a></li>
                            <li><a className="waves-effect" href="#education">Edication</a></li>
                            <li><a className="waves-effect" href="#footer">Contact</a></li>
                            <li><NavLink to='/projects'>Projects</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Navbar
