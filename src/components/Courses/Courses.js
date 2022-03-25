import React from 'react';
import { Container } from 'react-bootstrap';
import './Courses.css';
import office from '../../Images/courses/office.png';
import web from '../../Images/courses/web.png';
import app from '../../Images/courses/appDevelopment.png';

const Courses = () => {
    return(
        <div className='bg-color'>
            <Container>
                <div className='pb-2'>
                    <h1 className='text-white text-center fw-bold question-title py-5'>আমাদের কোর্সসমূহ</h1>
                    <h2 className='text-white text-center fw-bold question-title pt-5 pb-3 course-section-title'>SEDP</h2>
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
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Courses;