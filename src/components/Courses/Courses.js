import React from 'react';
import { Container } from 'react-bootstrap';
import './Courses.css';
import office from '../../Images/courses/office.png';
import web from '../../Images/courses/web.png';
import app from '../../Images/courses/appDevelopment.png';
import graphics from '../../Images/courses/graphics.png';
import poly from '../../Images/courses/poly.png';
import autocad from '../../Images/courses/autocad.png';
import industrial from '../../Images/courses/inds.png';
import spoken from '../../Images/courses/english.png';
import digital from '../../Images/courses/Digital-Marketing.png';
import threeD from '../../Images/courses/3D.png';

const Courses = () => {
    return(
        <div className='bg-color'>
            <Container>
                <div className='pb-2'>
                    <h1 className='text-white text-center fw-bold question-title py-5'>আমাদের কোর্সসমূহ</h1>
                    <div>
                        <div className='container pt-5'>
                            <div className='row'>
                                <div className='col-md-4 single-card-course pb-4'>
                                    <a href='/' alt='office-application'>
                                        <div className='card hover-effect'>
                                            <div className='view overlay'>
                                                <img className='card-img-top w-100' src={office} alt="card-img" />
                                                <a href='/'>
                                                    <div className='mask rgba-white-slight'></div>
                                                </a>
                                            </div>

                                            <div className='card-body'>
                                                {/* <a href='/' className='btn btn-design px-4'>Enroll Now</a> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className='col-md-4 single-card-course pb-4'>
                                    <a href='/' alt='office-application'>
                                        <div className='card hover-effect'>
                                            <div className='view overlay'>
                                                <img className='card-img-top' src={web} alt="card-img" />
                                                <a href='/'>
                                                    <div className='mask rgba-white-slight'></div>
                                                </a>
                                            </div>

                                            <div className='card-body'>
                                                {/* <a href='/' className='btn btn-design px-4'>Enroll Now</a> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className='col-md-4 single-card-course pb-4'>
                                    <a href='/' alt='office-application'>
                                        <div className='card hover-effect'>
                                            <div className='view overlay'>
                                                <img className='card-img-top' src={app} alt="card-img" />
                                                <a href='/'>
                                                    <div className='mask rgba-white-slight'></div>
                                                </a>
                                            </div>

                                            <div className='card-body'>
                                                {/* <a href='/' className='btn btn-design px-4'>Enroll Now</a> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-md-4 single-card-course pb-4'>
                                    <a href='/' alt='office-application'>
                                        <div className='card hover-effect'>
                                            <div className='view overlay'>
                                                <img className='card-img-top' src={graphics} alt="card-img" />
                                                <a href='/'>
                                                    <div className='mask rgba-white-slight'></div>
                                                </a>
                                            </div>

                                            <div className='card-body'>
                                                {/* <a href='/' className='btn btn-design px-4'>Enroll Now</a> */}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-md-4 single-card-course pb-4'>
                                    <a href='/' alt='office-application'>
                                        <div className='card hover-effect'>
                                            <div className='view overlay'>
                                                <img className='card-img-top' src={poly} alt="card-img" />
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
                                <div className='col-md-4 single-card-course pb-4'>
                                    <a href='/' alt='office-application'>
                                        <div className='card hover-effect'>
                                            <div className='view overlay'>
                                                <img className='card-img-top' src={autocad} alt="card-img" />
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
                                <div className='col-md-4 single-card-course pb-4'>
                                    <a href='/' alt='office-application'>
                                        <div className='card hover-effect'>
                                            <div className='view overlay'>
                                                <img className='card-img-top' src={industrial} alt="card-img" />
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
                                <div className='col-md-4 single-card-course pb-4'>
                                    <a href='/' alt='office-application'>
                                        <div className='card hover-effect'>
                                            <div className='view overlay'>
                                                <img className='card-img-top' src={spoken} alt="card-img" />
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
                                <div className='col-md-4 single-card-course pb-4'>
                                    <a href='/' alt='office-application'>
                                        <div className='card hover-effect'>
                                            <div className='view overlay'>
                                                <img className='card-img-top' src={digital} alt="card-img" />
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
                                <div className='col-md-4 single-card-course pb-4'>
                                    <a href='/' alt='office-application'>
                                        <div className='card hover-effect'>
                                            <div className='view overlay'>
                                                <img className='card-img-top' src={threeD} alt="card-img" />
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