import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row} from 'react-bootstrap';
import Slider from '../Header/Slider/Slider';
import IntialService from '../IntialService/IntialService';
import './Home.css';

const Home = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./service.JSON')
        .then(res => res.json())
        .then(data => setService(data));
    },[]);
    // console.log(service)
    
    return (
        <div className='bg-color'>
            <Slider/>
            <div  className="home-header">
                <Container>
                    <div className="title-section">
                        <h1>Varendra IT & <span> Polytechnic Care</span></h1>
                        {/* <p>Barindra IT is one of the best IT companies in Rajshahi city.  And here is a coaching center called Polytechnic Care.  At this coaching center, the students of all the polytechnics of Rajshahi city later.  We have full experience of developers and teachers.  By which are worn very carefully</p> */}
                    </div>
                    <h1 style={{
                        textAlign: "center",
                        fontSize: "3rem",
                        fontWeight: "bold",
                        borderBottom: "3px solid gray",
                        width: "50%",
                        margin: "auto"
                    }}>Some facts of our Institute</h1>
                    <div className="student-rating">
                        
                        <div>
                            <h1>900</h1>
                            <h3>Students</h3>
                        </div>
                        {/* <div>
                            <h1>15</h1>
                            <h3>Teachers</h3>
                        </div> */}
                        {/* <div>
                            <h1>15</h1>
                            <h3>Developers</h3>
                        </div>
                        <div>
                            <h1>50</h1>
                            <h3>Rooms</h3>
                        </div>
                        <div>
                            <h1>22</h1>
                            <h3>Courses</h3>
                        </div> */}
                    </div>
                    <h1 style={{
                        textAlign: "center",
                        fontSize: "3rem",
                        fontWeight: "bold",
                        borderBottom: "3px solid gray",
                        width: "25%",
                        margin: "auto"
                    }}>Our Services</h1>
                    <div>
                        <Row xs={1} md={4} className="g-4 my-5">
                            {
                                service.map(service1 => <IntialService service1={service1}></IntialService>)
                            }
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;