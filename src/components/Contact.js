import React from "react";
import "./style.css";

function Contact() {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-4 ml-auto text-center mb-3 mb-lg-0">
                <h1 className="responsive-headline">Contact Me</h1>
                <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>Feel free to contact me for future opportunities or to just say hi!
                </h3>
                <hr />
                <div class="container col-lg-4 mr-auto text-center">
                    <a target="_blank" href="https://www.linkedin.com/in/lu-hao-499970151/">
                        <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-256.png" class="socialMedia" />
                    </a>
                </div>
                <div className="container col-lg-4 mr-auto text-center">
                    <a target="_blank" href="https://github.com/lhaodev">
                        <img src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-256.png" class="socialMedia" />
                    </a>
                </div>
                <div className="container col-lg-4 mr-auto text-center">
                    <a target="_blank" href="https://www.instagram.com/kristen.lll/">
                        <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-256.png" class="socialMedia" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;
