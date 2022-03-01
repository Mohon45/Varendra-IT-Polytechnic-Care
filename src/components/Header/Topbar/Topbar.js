import React from 'react';
import  './Topbar.css';
import { Container } from 'react-bootstrap';
import topbarLogo from '../../../Images/logo1.png';

const Topbar = () => {
    return (
        <Container>
            <div className='row py-5 d-flex justify-content-between'>
                <div className='col-md-4'>
                    <img src={topbarLogo} alt="" />
                </div>
                <div className='col-md-8 row justify-content-end'>
                    <div className='col-md-3'>
                        <div className='d-flex align-items-center'>
                            <div>
                                <i class="top-icon fas fa-phone-square-alt fa-3x"></i>
                            </div>
                            <div className='ms-3 text-white'>
                                <p className='m-0'>+8801782638193</p>
                                <p className='m-0'>+8801303756025</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='d-flex'>
                            <div>
                                <i class="top-icon fas fa-phone-square-alt fa-3x"></i>
                            </div>
                            <div className='ms-3 text-white'>
                                <p className='m-0'>+8801782638193</p>
                                <p className='m-0'>+8801303756025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Topbar;