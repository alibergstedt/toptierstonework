import { jumpToPage } from './Hooks/utils';
import { Link } from 'react-router-dom';

const Hero = () => {

    const handleClick = (event: any) => {
        event.preventDefault();
        jumpToPage('contact');
        console.log('you got here');
    };

    return <>
            <div className='hero-img'>
            <div className="overlay">
            <div className="hero-content container d-flex align-items-center">
                <div className="px-4 py-5 text-center">
                    <h6 className="sub-title">AT TOP TIER</h6>
                    <h2 className="title">WE GUARANTEE ONLY THE 
                    <strong>BEST STONEWORK</strong></h2>
                <a className="btn radius-sm mx-2 my-1" href="tel:5678058719">Call Us</a>
                <a className="btn radius-sm mx-2 my-1 white" href="#" onClick={handleClick}>Get a Quote</a>
                </div>
            </div>
            </div>
            </div>
    </>;
}

export default Hero;
