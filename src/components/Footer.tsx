import React from "react";
import { FaFacebook, FaFacebookF, FaFeatherAlt, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import LogoWhite from '../images/logo-white.png';

const Footer = () => {
    return <footer>
    <div className="footer-container text-center text-md-left">
    <div className="footer-top bt0">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <div className="widget widget_info">
                        <img src={LogoWhite} />
                        <div className="my-3 me-md-4 pe-md-3">Full Masonry Services. Specializing in stone installation, chiney repair,
                            tuckponting, and more.
                        </div>
                        <div className="d-inline-flex ft-social-bx">
                        <a href="https://www.facebook.com/toptierstonework" target="_blank"><FaFacebookF /></a>
                        <a href="https://www.instagram.com/toptierstonework/" target='_blank'><FaInstagram/></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="widget footer_widget">
                        <h5 className="footer-title">Contact Information</h5>
                        <p><a href="tel:5678058719">Phone: (567) 805-8719</a></p>
                        <p><a href="mailto::toptierstonework@gmail.com">TopTierStonework@gmail.com</a></p>                      
                        <p>Location: Norwalk, Ohio, USA</p>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="widget footer_widget">
                        <h5 className="footer-title">Quick Links</h5>
                        <div><a href="#">Home</a></div>
                        <div><Link to="about-1">About Us</Link></div>
                        <div><Link to="company-history">Recent Work</Link></div>
                        <div><Link to="projects-single-1">Services</Link></div>
                        <div><Link to="case-study">Contact Us</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="footer-bottom">
                <div className="text-center">
                    <p className="m-b0">Copyright © 2022 
                    All Rights Reserved.</p>
                </div>
    </div>
</footer>;
};

export default Footer;