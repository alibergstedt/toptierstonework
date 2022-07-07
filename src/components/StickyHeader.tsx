import React from "react";
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';
import { jumpToPage } from "./Hooks/utils";
import Logo from '../images/logo.png';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const StickyHeader = () => {
    const handleClick = (event: any, id: string) => {
        jumpToPage(id);
    };

    return <Sticky enabled={true} className="sticky-header navbar-expand-lg">
    <div className="menu-bar clearfix">
        <div className="container clearfix">
            <div className="d-flex justify-content-between">
                {/* <!-- Header Logo ==== --> */}
                <div className="menu-logo">
                    <Link to="/"><img src={Logo} alt=""/></Link>
                </div>
                {/* <!-- Mobile Nav Button ==== --> */}
                <button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>   
                {/* <!-- Navigation Menu ==== --> */}
                <div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
                    <div className="menu-logo">
                        <Link to="/"><img src={Logo} alt=""/></Link>
                    </div>
                    <ul className="nav navbar-nav">	
                        <li><a href="#">Home</a>
                        </li>
                        <li><Link to="#" onClick={(e) => handleClick(e, 'aboutUs')}>About Us</Link>
                        </li>
                        <li><Link to="#" onClick={(e) => handleClick(e, 'recent')}>Recent Work</Link>
                        </li>
                        <li><Link to="#" onClick={(e) => handleClick(e, 'services')}>Services</Link>
                        </li>
                    </ul>
                    <div className="nav-social-link">
                        <a href="https://www.facebook.com/toptierstonework" target="_blank"><FaFacebook className="mb-1" /></a>
                        <a href="https://www.instagram.com/toptierstonework/" target='_blank'><FaInstagram className="me-2 mb-1" /></a>
                    </div>
                </div>
                {/* <!-- Navigation Menu END ==== --> */}        
                <div className="secondary-menu">
                    <div className="secondary-inner">
                        <ul>
                            <li className="d-none d-sm-block">
                                <Link to="#" className="btn radius-sm" onClick={(e) => handleClick(e, 'contact')}>Free Quote</Link>
                            </li>
                        </ul>
                    </div>
				</div>   
            </div>              
        </div>

    </div>
</Sticky>;
};

export default StickyHeader;