import React from 'react';
import { Accordion, Container} from 'react-bootstrap';
import Slider from '../Header/Slider/Slider';
import './Home.css';
import bio1 from '../../Images/sort-bio/bio-1.png';
import bio2 from '../../Images/sort-bio/bio-2.png';
import bio3 from '../../Images/sort-bio/bio-3.png';
import bio4 from '../../Images/sort-bio/bio-4.png';
import question from '../../Images/question.png';
import partner1 from '../../Images/band-promote/partner1.png';
import partner2 from '../../Images/band-promote/partner2.png';
import ceoPhoto from '../../Images/banner2.jpg';

const Home = () => { 
    return (
        <div className='bg-color'>
            <Slider/>
            <div  className="home-header">
                <Container>
                    {/* sort bio start */}
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <div className="card card-style mb-2">
                                <a className='sort-bio' href="">
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio1} alt='e' />
                                        <h5 className="card-title">7 YEARS OF EXCELLENCE</h5>
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card card-style mb-2">
                                <a className='sort-bio' href="">
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio2} alt='e' />
                                        <h5 className="card-title">20000+ TRAINED STUDENTS</h5>
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card card-style mb-2">
                                <a className='sort-bio' href="">
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio3} alt='e' />
                                        <h5 className="card-title">5000+ JOB PLACEMENTS</h5>
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card card-style mb-2">
                                <a className='sort-bio' href="">
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio4} alt='e' />
                                        <h5 className="card-title">50+ EXPERT TRAINERS</h5>
                                    </div>
                                </a>
                                
                            </div>
                        </div>
                        
                    </div>
                    {/* sort bio end */}

                    {/* about start */}

                    {/* about end */}

                    {/* basic question section start */}
                    <div className='py-5'>
                        <h1 className='text-white text-center fw-bold question-title my-5'>আমাদের সম্পর্কিত সাধারণ জিজ্ঞাসা</h1>
                        <div className='row d-flex justify-content-between align-items-center'>
                            <div className='col-md-5'>
                                <img width='100%' src={question}/>
                            </div>
                            <div className='col-md-6 my-5'>
                                <Accordion>
                                    <Accordion.Item className='single-according-item mb-3' eventKey="0">
                                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item className='single-according-item mb-3' eventKey="1">
                                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item className='single-according-item mb-3' eventKey="2">
                                        <Accordion.Header>Accordion Item #3</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item className='single-according-item mb-3' eventKey="3">
                                        <Accordion.Header>Accordion Item #4</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item className='single-according-item mb-3' eventKey="4">
                                        <Accordion.Header>Accordion Item #5</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    {/* basic question section end */}

                    {/* our brand pratner section start */}
                    <div className='pb-2'>
                        <h1 className='text-white text-center fw-bold question-title py-5'>Our Brand Partner</h1>
                        <div className='pertner-row'>
                            <div>
                                <img src={partner1}/>
                            </div>
                            <div>
                                <img src={partner1}/>
                            </div>
                            <div>
                                <img src={partner1}/>
                            </div>
                            <div>
                                <img src={partner1}/>
                            </div>
                            <div>
                                <img src={partner1}/>
                            </div>
                            <div>
                                <img src={partner2}/>
                            </div>
                        </div>
                    </div>
                    {/* our brand pratner section end */}

                    {/* ceo details section start */}
                    <div className='pb-2'>
                        <h1 className='text-white text-center fw-bold question-title py-5'>Founder of Varendra IT</h1>
                        <div className='row'>
                            <div className='col-md-5 ceo-img'>
                                <img src={ceoPhoto}/>
                            </div>
                            <div className='col-md-6 ceo-desc text-white'>
                                <p className='text-align-justify'>Sit no amet est diam sit et sadipscing erat eirmod, no lorem dolores duo et eos. Sadipscing sit ipsum sadipscing diam eirmod diam kasd et eos, ut invidunt sea dolor justo gubergren clita, aliquyam sed amet sit sed, amet elitr dolor sit eos sed diam takimata est, ipsum et sanctus ipsum rebum labore at rebum aliquyam takimata. Rebum at consetetur consetetur dolor rebum magna. Et voluptua amet sanctus ea ipsum sea, lorem aliquyam labore voluptua duo, amet tempor vero gubergren est gubergren, lorem sed clita eos rebum. Eirmod sit diam takimata sadipscing stet ipsum. Amet sea et justo ipsum justo.</p>
                                <i className='fw-bold'>Sarowar Jahan (mim)</i>
                                <p>CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                    {/* ceo section end */}

                </Container>
            </div>
        </div>
    );
};

export default Home;