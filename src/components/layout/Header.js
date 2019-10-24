import React, { Component } from 'react'
import $ from 'jquery';

class Header extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('.tooltipped').tooltip();
        });

    }
    render() {
        return (
            <div className="light-blue darken-1 no-pad-bot z-depth-1 start-splash-section">
                <div className="container">
                    <div className="padding-top-buttom">
                        <div id="imgDiv" />
                        <h3 className="white-text text-ligthen-5">QWERT ASDF</h3>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a className="tooltipped orange-text text-accent-3" data-position="bottom" data-tooltip="Linked In" href="https://id.linkedin.com/in/gede-ryan-pradnya-prastika" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                            {/* Github */}
                            <a className="tooltipped orange-text text-accent-3" data-position="bottom" data-tooltip="Git Hub" href="https://github.com/ryanpradnya/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>
                            {/* Facebook */}
                            <a className="tooltipped orange-text text-accent-3" data-position="bottom" data-tooltip="Facebook" href="https://www.facebook.com/ryan.pradnya" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default Header
