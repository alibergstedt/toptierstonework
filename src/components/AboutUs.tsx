import { FaAward, FaCheckCircle, FaCrown, FaMapMarkerAlt } from "react-icons/fa";
import { jumpToPage } from "./Hooks/utils";

const UVP = () => {
    const handleClick = (event: any) => {
        event.preventDefault();
        jumpToPage('contact');
    };

    return <div className="uvp d-md-flex d-sm-block flex-md-column flex-lg-row flex-sm-wrap flex-lg-nowrap" id='aboutUs'>
        <div className="p-md-5">
            <h3>Why Choose Us for Your Next Project?</h3>
            <p>At Top Tier, we take pride in our work.  When hiring us, not only are you guaranteed a
            quality finished product that will last you years, but our licensed and bonded professionals are courteous,
            respectful, and treat your house like their own. </p>
            <p>Whether you're looking to hire a commercial contractor or a local residential professional to install 
            your stone fireplace or repair your chimney, contact our masonry experts today to discuss your next project.</p>
            <a href="#" className="btn radius-sm mb-3" onClick={handleClick}>Contact Us</a>
        </div>
        <div className="row justify-content-center">
            <div className="uvp-card col-md-5 col-sm-12 pt-sm-3">
                <div><FaAward size={42} className="m-3" /></div>
                <div>
                    <h5>Top Tier Professionals</h5>
                    <p>Licensed and bonded quality stone experts</p>
                </div>
            </div>
            <div className="uvp-card col-md-5 col-sm-12">
                <div><FaMapMarkerAlt size={40} className="m-3" /></div>
                <div>
                    <h5>Locally Owned</h5>
                    <p>Owned and operated out of Norwalk, Ohio. Proudly serving our 
                        community and surrounding areas
                    </p>
                </div>
            </div>
            <div className="uvp-card col-md-5 col-sm-12">
                <div><FaCrown size={40} className="m-3" /></div>
                <div>
                    <h5>Quality Materials</h5>
                    <p>Top Tier Stonework offers only quality materials sourced from the top names in the
                        industry
                    </p>
                </div>
            </div>
            <div className="uvp-card col-md-5 col-sm-12">
                <div><FaCheckCircle size={40} className="m-3" /></div>
                <div>
                    <h5>Satisfaction Guaranteed</h5>
                    <p>We take pride in our work and you should too!
                    </p>
                </div>
            </div>
        </div>
</div>;
}

export default UVP;
