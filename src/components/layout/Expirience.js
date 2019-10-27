import React, { Component } from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'

class Expirience extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('.collapsible').collapsible();
        });
    }
    render() {
        const { expiriences } = this.props
        const myexpiriences = expiriences.length ? (
            expiriences.map(expirience => {
                return (
                    <li key={expirience.id}>
                        <div className="collapsible-header orange white-text">
                            <div className="col s1">
                                <i className="fa fa-gears" aria-hidden="true" />
                            </div>
                            <div className="col s11">
                                {expirience.title}
                            </div>
                        </div>
                        <div className="collapsible-body orange white-text">
                            <h4>{expirience.company}</h4>
                            <h5>{expirience.city}, {expirience.country}</h5>
                            <p>{expirience.startDate} - {expirience.endDate}</p>
                            <p>{expirience.description}</p>
                        </div>
                    </li>
                )
            })
        ) : (<li className="white-text">-No Skill-</li>)
        return (
            <div className="expirience">
                <div className="row">
                    <h2 className="orange-text text-acent-3">Experiences</h2>
                    <ul className="collapsible popout" data-collapsible="accordion">
                        {myexpiriences}
                    </ul>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        expiriences: state.expiriences
    }
}

export default connect(mapStateToProps)(Expirience)

