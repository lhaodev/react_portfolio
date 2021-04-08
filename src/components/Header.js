import React from "react";
import "./header.css";
import profilepic from '../assets/profilepic.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'

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
        <header>
            {/* <Image src={profilepic} /> */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="nav-wrap">

                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Lu Hao</a>
                    {/* <button
                        className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span
                            className="navbar-toggler-icon">
                        </span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0" id="nav">
                            <li className="nav-item"><a className="smoothscroll" href="#about">About</a></li>
                            <li className="nav-item"><a className="smoothscroll" href="#portfolioLink">Portfolio</a></li>
                            <li className="nav-item"><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <Navbar id="nav-wrap">
                <Navbar.Brand className="navbar-brand" href="#page-top">Lu Hao</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>*/}
        </header>

    )
}

export default Header;
