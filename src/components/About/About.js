import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../Images/about.jpg';

const About = () => {
    return (
        <div className='bg-color text-white'>
            <Container>
                <Row>
                    <Col className="my-5">
                        <h1 className="fw-bold " style={{color: "#488fb1"}}>Why Choose Us</h1>
                        <h2>12+ Years of Experience</h2>
                        <h2>Resource Managment</h2>
                        <p>Varendra IT is one of the best IT companies in Rajshahi city. And here is a coaching center called Polytechnic Care. At this coaching center, the students of all the polytechnics of Rajshahi city later.</p>
                        <div className="d-flex">
                            <div className="p-3">
                                <h2>Extensive Employment</h2>
                                <p>A culture of internet only jobs has coined the phrase Wirk. Wirk simply means Internet Work.</p>
                            </div>
                            <div className="p-3">
                                <h2>Working Placeholdered</h2>
                                <p>A culture of internet only jobs has coined the phrase Wirk. Wirk simply means Internet Work.</p>
                            </div>
                        </div>
                    </Col>
                    <Col><img className="w-100 my-5 rounded-3" src={about} alt="" /></Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default About;