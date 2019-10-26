import React, { Component } from 'react'
import $ from 'jquery'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { toHomeAction, toProjectsAction } from '../actions/rootAction'

// import NavbarHome from './NavbarHome'
// import NavbarProjects from './NavbarProjects'

import bgnav from '../../img/blue-orange.jpg'
import avatar from '../../img/avatar.jpg'

class Navbar extends Component {
    componentDidMount() {
        $('.button-collapse').sideNav();
    }

    hideSideNav = () => {
        $('.button-collapse').sideNav('hide');
    }

    hideToProjects = () => {
        this.props.toProjects()
        this.hideSideNav()
    }
    render() {
        const dinamicNavbar = !this.props.isProjectsPage ? (
            <div>
                <div className="navbar-fixed">
                    <nav className="nav-wrapper blue accent-2 navbar-fixed">
                        <div className="container">
                            <Link to='/' className="brand-logo">
                                <i className="material-icons custom-size-font">person_pin</i>My Page
                            </Link>
                            <a href="#!" className="button-collapse" data-activates="slide-out">
                                <i className="material-icons">menu</i>
                            </a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="#experience">Expiriences</a></li>
                                <li><a href="#skill">Skills</a></li>
                                <li><a href="#education">Edications</a></li>
                                <li><a href="#footer">Contact</a></li>
                                <li><NavLink to='/projects' onClick={this.props.toProjects}>Projects</NavLink></li>
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
                        <li><a className="waves-effect orange-text text-accent-3" href="https://id.linkedin.com/in/gede-ryan-pradnya-prastika" target="_blank" rel="noopener noreferrer" onClick={this.hideSideNav}>
                            <i className="fa fa-linkedin-square orange-text text-accent-3" aria-hidden="true" />Linked In
                        </a></li>
                        {/* Github */}
                        <li><a className="waves-effect orange-text text-accent-3" href="https://github.com/ryanpradnya/" target="_blank" rel="noopener noreferrer" onClick={this.hideSideNav}>
                            <i className="fa fa-github orange-text text-accent-3" aria-hidden="true" />Git Hub
                        </a></li>
                        {/* Facebook */}
                        <li><a className="waves-effect orange-text text-accent-3" href="https://www.facebook.com/ryan.pradnya" target="_blank" rel="noopener noreferrer" onClick={this.hideSideNav}>
                            <i className="fa fa-facebook-square orange-text text-accent-3" aria-hidden="true" />Facebook
                        </a></li>
                        <li><div className="divider"></div></li>
                        <li><a className="waves-effect" href="#experience" onClick={this.hideSideNav}>Expiriences</a></li>
                        <li><a className="waves-effect" href="#skill" onClick={this.hideSideNav}>Skills</a></li>
                        <li><a className="waves-effect" href="#education" onClick={this.hideSideNav} >Edications</a></li>
                        <li><a className="waves-effect" href="#footer" onClick={this.hideSideNav}>Contact</a></li>
                        <li><NavLink to='/projects' onClick={this.hideToProjects}>Projects</NavLink></li>
                    </ul>
                </div>
            </div>
        ) : (
                <div className="navbar-fixed">
                    <nav className="nav-wrapper blue accent-2 navbar-fixed">
                        <div className="container">
                            <Link to='/' className="brand-logo">My Page</Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><NavLink to='/' onClick={this.props.toHome}>Home</NavLink></li>
                            </ul>


                        </div>
                    </nav>
                </div>
            )
        // const dinamicNavbar = this.props.isProjectsPage ? <NavbarHome /> : <NavbarProjects />
        return (
            <div>
                {dinamicNavbar}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isProjectsPage: state.isProjectsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toHome: () => dispatch(toHomeAction()),
        toProjects: () => dispatch(toProjectsAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
