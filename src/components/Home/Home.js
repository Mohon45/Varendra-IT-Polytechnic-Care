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
import office from '../../Images/courses/office.png';
import web from '../../Images/courses/web.png';
import app from '../../Images/courses/appDevelopment.png';

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
                                <div className='sort-bio'>
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio1} alt='e' />
                                        <h5 className="card-title">7 YEARS OF EXCELLENCE</h5>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card card-style mb-2">
                                <div className='sort-bio'>
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio2} alt='e' />
                                        <h5 className="card-title">20000+ TRAINED STUDENTS</h5>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card card-style mb-2">
                                <div className='sort-bio'>
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio3} alt='e' />
                                        <h5 className="card-title">5000+ JOB PLACEMENTS</h5>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card card-style mb-2">
                                <div className='sort-bio'>
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio4} alt='e' />
                                        <h5 className="card-title">50+ EXPERT TRAINERS</h5>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    {/* sort bio end */}

                    {/* about start */}

                    {/* about end */}

                    {/* Courses section start */}
                    <div className='pb-2'>
                        <h1 className='text-white text-center fw-bold question-title py-5'>আমাদের কোর্সসমূহ</h1>
                        
                        <div>
                            <div className='container pt-5'>
                                <div className='row'>
                                    <div className='col-md-4 pb-4'>
                                        <a href='/' alt='office-application'>
                                            <div className='card hover-effect'>
                                                <div className='view overlay'>
                                                    <img className='card-img-top w-100' src={office} alt="card-img" />
                                                    <a href='/'>
                                                        <div className='mask rgba-white-slight'></div>
                                                    </a>
                                                </div>

                                                <div className='card-body'>
                                                    <a href='/' className='btn btn-design px-4'>Enroll Now</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className='col-md-4 pb-4'>
                                        <a href='/' alt='office-application'>
                                            <div className='card hover-effect'>
                                                <div className='view overlay'>
                                                    <img className='card-img-top' src={web} alt="card-img" />
                                                    <a href='/'>
                                                        <div className='mask rgba-white-slight'></div>
                                                    </a>
                                                </div>

                                                <div className='card-body'>
                                                    <a href='/' className='btn btn-design px-4'>Enroll Now</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className='col-md-4 pb-4'>
                                        <a href='/' alt='office-application'>
                                            <div className='card hover-effect'>
                                                <div className='view overlay'>
                                                    <img className='card-img-top' src={app} alt="card-img" />
                                                    <a href='/'>
                                                        <div className='mask rgba-white-slight'></div>
                                                    </a>
                                                </div>

                                                <div className='card-body'>
                                                    <a href='/' className='btn btn-design px-4'>Enroll Now</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='row more-top mt-3'>
                                        <div className='col-md-3 col-sm-12 more-course  text-center'>
                                           <a href='/courses' className='d-flex justify-content-evenly align-items-center text-white'>
                                                <p className='mt-2 p-0'>More Courses</p>
                                                <i class="fas fa-arrow-right fa-2x p-0"></i>
                                           </a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Courses section end */}

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
                            <div className='col-md-2'>

                            </div>
                            <div className='col-md-4 ceo-img'>
                                <img className='rounded' src={ceoPhoto}/>
                            </div>
                            <div className='col-md-4 ceo-desc text-white'>
                                <p className='text-align-justify'>As one of the leading IT solution providers of Bangladesh, 
                                we are working with the vision of making the nation proficient in the Global IT village by 
                                building a platform which serves business owners as well as freelancers with comprehensive 
                                training for IT skills and professional enterprise solutions</p>
                                <i className='fw-bold'>Sarowar Jahan (mim)</i>
                                <p>CEO & Founder</p>
                            </div>
                            <div className='col-md-2'>

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