import React, { Component } from 'react'
import $ from 'jquery';

export class Parallax extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('.parallax').parallax();
        });

    }
    render() {
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax"><img src={this.props.image} /></div>
                </div>

            </div>
        )
    }
}

export default Parallax
