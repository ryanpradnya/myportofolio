import React, { Component } from 'react'
import $ from 'jquery';

import Header from '../layout/Header'
import Expirience from '../layout/Expirience'
import Education from '../layout/Education'
import Parallax from '../layout/Parallax'
import Footer from '../layout/Footer'

import img1 from '../../img/parallax1.jpg'
import img2 from '../../img/parallax2.jpg'


class home extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('.scrollspy').scrollSpy();
        });
    }
    render() {
        return (
            <div>

                <Header />
                <section className="container section scrollspy" id="experience">
                    <Expirience />
                </section>

                <Parallax image={img1} />

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
