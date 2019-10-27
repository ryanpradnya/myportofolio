import React, { Component } from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import { toHomeAction, toProjectsAction } from '../actions/rootAction'

import NavbarHome from './NavbarHome'
import NavbarProjects from './NavbarProjects'

class Navbar extends Component {
    componentDidMount() {
        $('.button-collapse').sideNav();
    }
    componentDidUpdate() {
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
        const dinamicNavbar = !this.props.isProjectsPage ?
            <NavbarHome hideSideNav={this.hideSideNav} hideToProjects={this.hideToProjects} toProjects={this.props.toProjects} /> :
            <NavbarProjects toHome={this.props.toHome} />
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
