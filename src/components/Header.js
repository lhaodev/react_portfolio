import React from "react";
import "./style.css";

function Header() {
    return (
        // <header id="headerTop">
        //     <nav id="nav-wrap">
        //         {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        //         <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a> */}
        //         <ul id="nav" className="nav">
        //             <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
        //             <li><a className="smoothscroll" href="#about">About</a></li>
        //             <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
        //             <li><a className="smoothscroll" href="#contact">Contact</a></li>
        //         </ul>
        //     </nav>
        // </header>

        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Lu Hao</a>
                <button
                    class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span
                        class="navbar-toggler-icon">
                    </span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto my-2 my-lg-0">
                        <li class="nav-item"><a classname="smoothscroll" href="#about">About</a></li>
                        <li class="nav-item"><a classname="smoothscroll" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a classname="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Header;
