import React, { Component } from 'react'

class Education extends Component {
    render() {
        return (
            <div>
                <div className="education">

                    <div className="row">
                        <h2 className="green-text">Education</h2>
                        <div className="row">
                            <div className="col s12 l2 green-text text-acent-3">
                                <h4>Title 1</h4>
                            </div>
                            <div className="col s12 l9 offset-l1">
                                <blockquote className="blockquote-blue grey lighten-5">
                                    <h3>School</h3>
                                    <h5>Degree - Field OF Study</h5>
                                    <h5 className="font-weigt-loss">Start Year - End Year</h5>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education
