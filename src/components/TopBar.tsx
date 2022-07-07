import React from 'react';
import { jumpToPage } from './Hooks/utils';
import { FaFacebook, FaEnvelopeOpen, FaPhone, FaMapMarkerAlt, FaInstagram, FaReact } from 'react-icons/fa';

const TopBar = () => {

    const handleClick = (event: any) => {
        event.preventDefault();
        jumpToPage('contact');
    };
    
    return <header className="header rs-nav">
        		<div className="top-bar">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="topbar-left">
                                <ul>
                                    <li>
                                        <FaMapMarkerAlt className="me-2 mb-1" />
                                        Norwalk, OH</li>
                                    <li>
                                        <FaPhone className="me-2 mb-1" />
                                        <a href="tel:5678058719">Call Us (567) 805-8719</a>
                                    </li>
                                    <li>
                                        <FaEnvelopeOpen className="me-2 mb-1" />
                                        <a href="mailto::toptierstonework@gmail.com">TopTierStonework@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="topbar-right">
                                <ul>
                                    <li>
                                    <a href="#" onClick={handleClick}>Contact Us</a>
                                    </li>
                                    <li>
                                    <a href="https://www.facebook.com/toptierstonework" target="_blank"><FaFacebook className="mb-1" /></a>
                                    </li>
                                    <li>
                                    <a href="https://www.instagram.com/toptierstonework/" target='_blank'><FaInstagram className="me-2 mb-1" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
				</div>
    </header>;
};

export default TopBar;