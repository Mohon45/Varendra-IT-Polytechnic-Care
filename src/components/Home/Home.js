import React from 'react';
import { Accordion, Container} from 'react-bootstrap';
import Slider from '../Header/Slider/Slider';
import './Home.css';
import bio1 from '../../Images/sort-bio/bio-1.png';
import bio2 from '../../Images/sort-bio/bio-2.png';
import bio3 from '../../Images/sort-bio/bio-3.png';
import bio4 from '../../Images/sort-bio/bio-4.png';
import question from '../../Images/question.png';

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
                                    <Accordion.Item className='single-according-item mb-3' eventKey="5">
                                        <Accordion.Header>Accordion Item #6</Accordion.Header>
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
                </Container>
            </div>
        </div>
    );
};

export default Home;