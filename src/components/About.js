import React from "react";
import "./style.css";

function About() {
    return (
        <section class="page-section " id="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-center mt-0">About Me</h2>
                        <hr class="divider my-4" />
                        <p class="mb-0">Lu Hao is a Full-Stack Developer graduated from GWU bootcamp. Lu has
                        extensive experience in front and back end technologies such as JavaScript, HTML, CSS, SQL, React.js, Bootstrap, Node.js,
            Express, MangoDB.</p>
                        <div class="aboutMeButtons">
                            <a href="../assets/LuHao Resume - developer.pdf" class="btn btn-outline-primary" id="viewResume"
                                role="button">View Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
