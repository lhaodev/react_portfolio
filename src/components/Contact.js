import React from "react";
import "./contact.css";

function Contact() {
    return (
        // <section class="page-section" id="contact">
        //     <div className="container">
        //         <div className="col-lg-4 ml-auto text-center mb-3 mb-lg-0">
        //             <h1 style={{ fontFamily: 'sans-serif ' }} className="responsive-headline">Contact Me</h1>
        //             <h5 style={{ fontFamily: 'sans-serif ' }}>Feel free to contact me for future opportunities or to just say hi!
        //         </h5>
        //             <hr />
        //             <div className="social">
        //                 <div className=" mr-auto text-center">
        //                     <a target="_blank" href="https://www.linkedin.com/in/lu-hao-499970151/">
        //                         <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-256.png" class="socialMedia" />
        //                     </a>
        //                 </div>

        //                 <br></br>

        //                 <div className=" mr-auto text-center">
        //                     <a target="_blank" href="https://github.com/lhaodev">
        //                         <img src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-256.png" class="socialMedia" />
        //                     </a>
        //                 </div>

        //                 <br></br>

        //                 <div className=" mr-auto text-center">
        //                     <a target="_blank" href="https://www.instagram.com/kristen.lll/">
        //                         <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-256.png" class="socialMedia" />
        //                     </a>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </section>


        <div id="contact" className="row banner">
            <div className="banner-text">
                <h3 className="responsive-headline">Contact Me</h3>
                <div class="typewriterNew">
                    <h5>Feel free to contact me for future opportunities or to just say hi!</h5>
                </div>
                <hr className="divider" />
                <ul className="social">
                    <li key="instagram">
                        <a href="https://www.instagram.com/kristen.lll/" target="_blank" >
                            <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-256.png" class="socialMedia" />
                        </a>
                        <i className="fa fa-linkedin" />
                    </li>
                    <li key="github">
                        <a href="https://github.com/lhaodev" target="_blank" >
                            <img src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/GitHub-256.png" class="socialMedia" />
                        </a>
                        <i className="fa fa-github" />
                    </li>
                    <li key="linkedin">
                        <a href="https://www.linkedin.com/in/lu-hao-499970151/" target="_blank" >
                            <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-256.png" class="socialMedia" />
                        </a>
                        <i className="fa fa-linkedin" />
                    </li>
                </ul>
            </div>
        </div >
















    )
}

export default Contact;
