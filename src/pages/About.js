import React from "react";
import "../components/about.css";
import resume from '../assets/LuHao Resume - developer.pdf';

function About() {
    return (
        <section class="page-section " id="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-center mt-0">About Me</h2>
                        <hr class="divider" />
                        <div class="typewriter">
                            <h4 class="mb-0 css-typing">Lu Hao is a Full-Stack Developer graduated from GWU bootcamp.</h4>
                            <h4 class="mb-0 css-typing">  Lu has
                            extensive experience in front and back end technologies</h4>
                            <h4 class="mb-0 css-typing">
                                such as JS, HTML, CSS, SQL, React.js, Node.js, Express and MangoDB.</h4>
                        </div>
                        <br></br>
                        <div class="aboutMeButtons">
                            <a href={resume} class="btn btn-2" id="viewResume"
                                role="button">View Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
