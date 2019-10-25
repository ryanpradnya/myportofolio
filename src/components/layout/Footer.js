import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="page-footer deep-orange scrollspy" id="footer">
                <div className="container">
                    <div className="long-div row">
                        <div className="col l6 s12">
                            <h5 className="white-text">About Me</h5>
                            <p>I have an interest in data processing that uses logic and I will use the right algorithm to solve it, even though it uses a lot of energy and mind. But that makes me stronger than before</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Contact</h5>
                            <ul>
                                <li><p><i className="fa fa-phone" aria-hidden="true" /> +62 877 6212 8553</p></li>
                                <li><p><i className="fa fa-envelope-o" aria-hidden="true" /> ryanpradnya@gmail.com</p></li>
                                <li><p><i className="fa fa-whatsapp" aria-hidden="true" /> +62 877 6212 8553</p></li>

                            </ul>
                        </div>
                    </div>

                </div>
                <div className="footer-copyright deep-orange darken-4">
                    <div className="container center-align">&copy; 2019 Gede Ryan Pradnya Prastika</div>

                </div>

            </footer>
        )
    }
}

export default Footer
