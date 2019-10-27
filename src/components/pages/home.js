import React, { Component } from 'react'
import $ from 'jquery';

import Header from '../layout/Header'
import Expirience from '../layout/Expirience'
import Education from '../layout/Education'
import Skill from '../layout/Skill'
import Parallax from '../layout/Parallax'
import Footer from '../layout/Footer'

import img1 from '../../img/parallax1.jpg'
import img2 from '../../img/parallax2.jpg'


class home extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('.scrollspy').scrollSpy();
            $('.parallax').parallax();
        });
    }
    render() {
        return (
            <div className="home">
                <section className="scrollspy" id="header">
                    <Header />
                </section>

                <section className="container section scrollspy" id="experience">
                    <Expirience />
                </section>

                <div className="custom-parallax">
                    <Parallax image={img1} />
                </div>

                <section className="scrollspy" id="skill">
                    <Skill />
                </section>

                <div className="custom-parallax">
                    <Parallax image={img1} />
                </div>

                <section className="container section scrollspy" id="education">
                    <Education />
                </section>

                <Parallax image={img2} />

                <Footer />

            </div>
        )
    }
}

export default home
