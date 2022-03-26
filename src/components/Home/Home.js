import React from 'react';
import { Accordion, Container} from 'react-bootstrap';
import Slider from '../Header/Slider/Slider';
import './Home.css';
import about from '../../Images/about-final.png';
import bio1 from '../../Images/sort-bio/bio-1.png';
import bio2 from '../../Images/sort-bio/bio-2.png';
import bio3 from '../../Images/sort-bio/bio-3.png';
import bio4 from '../../Images/sort-bio/bio-4.png';

import question from '../../Images/question.png';

import partner1 from '../../Images/band-promote/bteb.png';
import partner2 from '../../Images/band-promote/basis.png';
import partner3 from '../../Images/band-promote/bmet.png';
import partner4 from '../../Images/band-promote/canada-tm.png';
import partner5 from '../../Images/band-promote/ict-devision.png';
import partner6 from '../../Images/band-promote/world-bank.png';

import office from '../../Images/courses/office.png';
import Graphics from '../../Images/courses/graphics.png';
import poly from '../../Images/courses/poly.png';

import ceo from '../../Images/ceo.jpg';

const Home = () => { 
    return (
        <div className='bg-color'>
            <Slider/>
            <div  className="home-header">
                <Container>
                    {/* sort bio start */}
                    <div className="row">
                        <div className="col-md-3 col-sm-12 single-card-course">
                            <div className="card card-style mb-2">
                                <div className='sort-bio'>
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio1} alt='e' />
                                        <h5 className="card-title">5 YEARS OF EXCELLENCE</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 single-card-course">
                            <div className="card card-style mb-2">
                                <div className='sort-bio'>
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio2} alt='e' />
                                        <h5 className="card-title">2000+ TRAINED STUDENTS</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12 single-card-course">
                            <div className="card card-style mb-2">
                                <div className='sort-bio'>
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio3} alt='e' />
                                        <h5 className="card-title">250+ JOB PLACEMENTS</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="card card-style mb-2">
                                <div className='sort-bio'>
                                    <div className="card-body single-card">
                                        <img className='my-3' src={bio4} alt='e' />
                                        <h5 className="card-title">30+ EXPERT TRAINERS</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    {/* sort bio end */}

                    {/* Courses section start */}
                    <div className='pb-2'>
                        <h1 className='text-white text-center fw-bold question-title py-5'>আমাদের কোর্সসমূহ</h1>
                        
                        <div>
                            <div className='container pt-5'>
                                <div className='row'>
                                    <div className='col-md-4 pb-4'>
                                        <a href='/courses' alt='office-application'>
                                            <div className='card hover-effect'>
                                                <div className='view overlay'>
                                                    <img className='card-img-top w-100' src={office} alt="card-img" />
                                                    <a href='/courses'>
                                                        <div className='mask rgba-white-slight'></div>
                                                    </a>
                                                </div>

                                                <div className='card-body'>
                                                    <a href='/courses' className='btn btn-design px-4'>Enroll Now</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className='col-md-4 pb-4'>
                                        <a href='/courses' alt='office-application'>
                                            <div className='card hover-effect'>
                                                <div className='view overlay'>
                                                    <img className='card-img-top' src={Graphics} alt="card-img" />
                                                    <a href='/courses'>
                                                        <div className='mask rgba-white-slight'></div>
                                                    </a>
                                                </div>

                                                <div className='card-body'>
                                                    <a href='/courses' className='btn btn-design px-4'>Enroll Now</a>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className='col-md-4 pb-4'>
                                        <a href='/courses' alt='office-application'>
                                            <div className='card hover-effect'>
                                                <div className='view overlay'>
                                                    <img className='card-img-top' src={poly} alt="card-img" />
                                                    <a href='/courses'>
                                                        <div className='mask rgba-white-slight'></div>
                                                    </a>
                                                </div>

                                                <div className='card-body'>
                                                    <a href='/courses' className='btn btn-design px-4'>Enroll Now</a>
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

                    {/* about start */}
                    <div className='pb-2'>
                        <h1 className='text-white text-center fw-bold question-title py-5'>আমাদের সম্পর্কে জানুন</h1>
                        <div className='row'>
                            <div className='col-md-12 about-img'>
                                <img src={about} alt="" />
                            </div>
                        </div>
                    </div>
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
                                        <Accordion.Header className='fw-bold'>আপনাদের কোর্সসমূহ ?</Accordion.Header>
                                        <Accordion.Body className='text-white'>
                                        আমাদের কোর্স সমূহ: <br />
                                        1. কম্পিউটার অফিস অ্যাপ্লিকেশন <br />
                                        2. গ্রাফিক ডিজাইন উইথ ফ্রিল্যান্সিং গাইড লাইন <br />
                                        3. ‍অটোক্যাড ২ডি ও ৩ডি <br />
                                        4. ডুয়েট প্রিপারেশন + জব কোচিং <br />
                                        5. ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট <br />
                                        6. ডিজিটাল মার্কেটিং <br />
                                        7. অ্যাপ ডেভেলপমেন্ট <br />
                                        8. পলিটেকনিক কোচিং <br />
                                        9. স্পোকেন ইংলিশ
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item className='single-according-item mb-3' eventKey="1">
                                        <Accordion.Header className='fw-bold'>কোন কোর্স এর কত ফি ?</Accordion.Header>
                                        <Accordion.Body className='text-white'>
                                        কোর্স ফি সমূহ: <br />
                                        1. কম্পিউটার অফিস অ্যাপ্লিকেশন (৩/৬ মাস) - ৩০০০/- <br />
                                        2. গ্রাফিক ডিজাইন উইথ ফ্রিল্যান্সিং গাইড লাইন (৪ মাস) - ৬০০০/- <br />
                                        3. ‍অটোক্যাড ২ডি ও ৩ডি (৩/৬ মাস) - ৩০০০/- <br />
                                        4. ডুয়েট প্রিপারেশন অ্যান্ড জব কোচিং - খুব শীঘ্রই শুরু হবে। <br />
                                        5. ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট (৪ মাস) - ৬০০০/- <br />
                                        6. ডিজিটাল মার্কেটিং (৪ মাস) - ৬০০০/- <br />
                                        7. মোবাইল অ্যাপ ডেভেলপমেন্ট - ৬০০০/- <br />
                                        ৮. পলিটেকনিক কোচিং- ২৫০০/- <br />
                                        ৯. স্পোকেন ইংলিশ - ১৫০০/- <br />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item className='single-according-item mb-3' eventKey="2">
                                        <Accordion.Header className='fw-bold'>আপনাদের কি কোন ফ্রী কোর্স  চলছে ?</Accordion.Header>
                                        <Accordion.Body className='text-white'>
                                        স্বাধিনতার সুবর্ণ জয়ন্তী উপলক্ষ্যে বর্তমানে আমাদের SCDP 
                                        প্রজেক্টে এর আওতায় কম্পিউটার অফিস অ্যাপ্লিকেশন এবং 
                                        গ্রাফিক ডিজাইন কোর্স এ ফ্রী ট্রেনিং প্রদান করা হচ্ছে। এ সুযোগটি
                                         গ্রহন করতে পারবেন আগামী ১৪ এপ্রিল  ২০২২ পর্যন্ত।
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item className='single-according-item mb-3' eventKey="3">
                                        <Accordion.Header className='fw-bold'>ফ্রি কোর্স এ কিভাবে ভর্তি হব ?</Accordion.Header>
                                        <Accordion.Body className='text-white'>
                                        ১ কপি ছবি ও ১ কপি এস এস সি এর মার্কশীট অথবা সনদপত্রের ফটোকপি নিয়ে
                                         আমাদের অফিসে এসে ১০০ টাকা দিয়ে ফরম ফিলাপ করতে হবে। তারপর আমরা 
                                         আপনার ব্যাচ ও টাইম নির্ধারণ করব। এরপর ‍আপনাকে ৩২০ টাকা প্রদান করে ভর্তি কনফার্ম
                                          করে ক্লাস করতে পারবেন। এছাড়া আর কোন টাকা প্রদান করতে হবে না।
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item className='single-according-item mb-3' eventKey="4">
                                        <Accordion.Header className='fw-bold'>আপনাদের ঠিকানা কোথায় ?</Accordion.Header>
                                        <Accordion.Body className='text-white'>
                                        আমাদের ঠিকানা: রাজশাহী পলিটেকনিক এর বিপরীতে, ২য় ও ৪র্থতলা, সপুরা, রাজশাহী।
                                        অফিস সময়: সকাল ৮ টা হতে রাত ৮টা পর্যন্ত। মোবাইল নং: 01719132276
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                    {/* basic question section end */}

                    {/* our brand pratner section start */}
                    <div className='pb-2'>
                        <h1 className='text-white text-center fw-bold question-title py-5'>We are Associate with</h1>
                        <div className='pertner-row'>
                            <div className='brand-pertner'>
                                <img src={partner1}/>
                            </div>
                            <div className='brand-pertner'>
                                <img src={partner2}/>
                            </div>
                            <div className='brand-pertner'>
                                <img src={partner3}/>
                            </div>
                            <div className='brand-pertner'>
                                <img src={partner4}/>
                            </div>
                            <div className='brand-pertner'>
                                <img src={partner5}/>
                            </div>
                            <div className='brand-pertner'>
                                <img src={partner6}/>
                            </div>
                        </div>
                    </div>
                    {/* our brand pratner section end */}

                    {/* ceo details section start */}
                    <div className='pb-2'>
                        <h1 className='text-white text-center fw-bold question-title py-5'>Founder & CEO of Varendra IT</h1>
                        <div className='row'>
                            <div className='col-md-2'>

                            </div>
                            <div className='col-md-4 ceo-img'>
                                <img className='rounded' src={ceo}/>
                            </div>
                            <div className='col-md-4 ceo-desc text-white'>
                                <p className='text-align-justify'>As one of the leading IT solution providers of Bangladesh, 
                                we are working with the vision of making the nation proficient in the Global IT village by 
                                building a platform which serves business owners as well as freelancers with comprehensive 
                                training for IT skills and professional enterprise solutions</p>
                                <i className='fw-bold'>Sarwar Mim</i>
                                <p>Founder & CEO</p>
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