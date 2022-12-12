import { FaAngleRight } from 'react-icons/fa';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

import TuckPontingImg from '../images/masonry-tuckpointing-and-repointing-1.jpg';
import ChimneyRepairImg from '../images/chimney-repair-before.jpg';
import StoneFireplace from '../images/stone-fireplace.jpg';
import PowerWashingImg from '../images/pressure-power-washing-brick.jpg';
import StoneFirePit from '../images/stone-fire-pit.jpg';

const Services = () => {
    return <div className='services-box p-md-5 mb-md-4' id='services'>
        <div className='outline'>Services</div>
        <h3 className="mb-0">Our Services</h3>
        <p className="m-auto p-3 pb-md-5 w-md-75">Top Tier is proud to offer full stone services
        to our customers.  Click on each service to learn a little more about what we offer and the benefits of maintaining
        your beautiful brick and stonework.</p>
        <Tab.Container id="left-tabs-example" defaultActiveKey="one">
            <Row>
            <Col sm={3}>
                <Nav variant="pills" className="flex-md-column flex-sm-row">
                <Nav.Item>
                    <Nav.Link eventKey="one"><FaAngleRight className='me-1' />Stone Installation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="two"><FaAngleRight className='me-1'/>Chimney Repair</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="three"><FaAngleRight className='me-1'/>Tuck Pointing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="four"><FaAngleRight className='me-1'/>Power Washing</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="five"><FaAngleRight className='me-1'/>And More</Nav.Link>
                </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                <Tab.Pane eventKey="one" className='ms-2'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12'>
                            <h3>Stone Installation</h3>
                            <p>We specialize in stonework.  It's in our name.  If you're
                                looking to add stone to your fireplace or hang cultured stone veneer
                                on the exterior of your home, we have the tools and expertise to 
                                make it happen.
                            </p>
                            <p>
                                From Dutch quality to Prestige, we will select only the best quality
                                stone for your project.  Have a vision already in mind?  Not a problem.
                                Contact us today to get started.
                            </p>
                        </div>
                        <div className='col-lg-5 col-md-12 text-center'><img src={StoneFireplace} /></div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="two" className='ms-2'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12'>
                            <h3>Chimney Restoration</h3>
                            <p>Do you have spalling or failing brick?  Is your chimney in need of
                                some TLC? It is important to keep your chimney maintained not just for aesthetics
                                but for the safety of your home. </p>
                            <p>Top Tier Stonework can repair and restore
                                your chimney from top to bottom. We have the tools to replace
                                failing bricks without dismantling
                                the entire chimney and install new chimney caps and crowns. We also offer full
                                waterproofing services to prolong to life of your new chimney.
                            </p>
                        </div>
                        <div className='col-lg-5 col-md-12 text-center'><img src={ChimneyRepairImg} /></div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="three" className='ms-2'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12'>
                            <h3>Tuck Pointing</h3>
                            <p>Repointing and tuckpointing is the act of replacing crumbling mortar joints and
                                grinding out existing old joints, replacing them with new mortar.
                            </p>
                            <p>
                                Tuck pointing is vital to the life of your brick or stone and prevents water from
                                seeping between your house or chimney causing serious and unseen damage, like
                                mold, mildew, and rot.  If you see signs of cracks, crumbling, or deteriorating
                                mortar in your brick or stone, it may be time to tuckpoint.  Our team is happy
                                to come inspect your project and give a free quote.
                            </p>
                        </div>
                        <div className='col-lg-5 col-md-12 text-center'><img src={TuckPontingImg} /></div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="four" className='ms-2'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12'>
                            <h3>Power Washing</h3>
                            <p>Looking to have your brick or stone cleaned? We offer full power washing
                                services from home exteriors to sidewalks, driveways, and more.</p>
                            <p>
                                A dirty exterior an look extremely worn down.  Power washiing your home
                                not only increase your curb appeal immediately but will also remove any lingering
                                harmful contaminants the can damage your home reducing the likelyhood of 
                                future costly repairs.
                            </p>
                        </div>
                        <div className='col-lg-5 col-md-12 text-center'><img src={PowerWashingImg} /></div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="five" className='ms-2'>
                    <div className='row'>
                        <div className='col-lg-7 col-md-12'>
                            <h3>Have a stone project?</h3>
                            <p>Don't see your project in our available services? That's okay, Top Tier offers 
                                full masonry services beyond what you see here.  Give us a call
                                to discuss your project needs.
                            </p>
                        </div>
                        <div className='col-lg-5 col-md-12 text-center'><img src={StoneFirePit} /></div>
                    </div>
                </Tab.Pane>
                </Tab.Content>
            </Col>
            </Row>
    </Tab.Container>
    </div>;
}

export default Services;