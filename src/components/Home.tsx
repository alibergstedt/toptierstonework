import TopBar from './TopBar';
import StickyHeader from './StickyHeader';
import Footer from './Footer';
import Hero from './Hero';
import Services from './Services';
import ContactPage from './ContactPage';
import UVP from './AboutUs';
import Portfolio from './Portfolio';

const HomePage = () => {
    return <div className='App'>
        <TopBar />
        <StickyHeader />
        <Hero />
        <UVP />
        <Portfolio />
        <Services />
        <ContactPage />
        <Footer />
    </div>;
};

export default HomePage;