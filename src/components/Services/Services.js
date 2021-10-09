import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    // console.log(services);

    return (
        <Container>
            <Row xs={1} md={3} className="g-4 my-5">
                {
                    services.map(service => <Service service={service} key={service.key}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;