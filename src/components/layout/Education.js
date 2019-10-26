import React, { Component } from 'react'
import { connect } from 'react-redux'

class Education extends Component {
    render() {
        const { educations } = this.props
        const myeducations = educations.length ? (
            educations.map(education => {
                const iconClassName = (((education.schoolCode === 1) ? 'fa fa-pencil' : (education.schoolCode === 2) ? 'fa fa-book' : 'fa fa-graduation-cap') + ' blue-text text-acent-3')
                const eduList = (education.id % 2) ? (
                    <div className="row" key={education.id}>
                        <div className="col s12 l6 vl">
                            <i className={iconClassName} aria-hidden="true" />
                            <h3 className=" blue-text text-acent-3">{education.school}</h3>
                            <h5>{education.degree} - {education.fieldOfStudy}</h5>
                            <h5 className="font-weigt-loss">{education.startYear} - {education.endYear}</h5>
                        </div>
                        <div className="col s12 l5 push-l1 right-align">
                        </div>
                    </div>
                ) : (
                        <div className="row" key={education.id}>
                            <div className="col s12 l6 vl">
                            </div>
                            <div className="col s12 l5 push-l1 right-align">
                                <i className={iconClassName} aria-hidden="true" />
                                <h3 className=" blue-text text-acent-3">{education.school}</h3>
                                <h5>{education.degree} - {education.fieldOfStudy}</h5>
                                <h5 className="font-weigt-loss">{education.startYear} - {education.endYear}</h5>
                            </div>
                        </div>
                    )
                return (
                    <div>
                        {eduList}
                    </div>
                )
            })
        ) : (<p className="blue-text">-No Education-</p>)
        return (
            <div>
                <div className="education">
                    <div className="row">
                        <h1 className="deep-orange-text">Educations</h1>
                        {myeducations}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        educations: state.educations
    }
}

export default connect(mapStateToProps)(Education)
