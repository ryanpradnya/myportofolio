import React, { Component } from 'react'
import { connect } from 'react-redux'

import bgLogo from '../../img/bg-skill.jpg'

class Skill extends Component {
    render() {
        const { skills } = this.props
        const mySkills = skills.length ? (
            skills.map(skill => {
                return (
                    <div className="col offset-l1 chip orange white-text" key={skill}>{skill}</div>
                )
            })
        ) : (<p className="white-text">-No Skill-</p>)
        return (
            <div className="skill">
                <div className="row">
                    <div className="col s12 l5">
                        <div className="container">
                            <h1 className="white-text">SKILLS</h1>
                            {mySkills}
                        </div>
                    </div>

                    <div className="col s12 l7">
                        <img className="img-skill" src={bgLogo} alt="" />
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        skills: state.skills
    }
}

export default connect(mapStateToProps)(Skill)
