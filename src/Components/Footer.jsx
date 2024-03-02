import React from 'react'
import Logo from '../assets/Images/Logo.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GitHub, Linkedin, Twitter } from './Icons';

const Footer = () => {
  return (
<>
<section className='pt-5'>
   <Container>
   <div className='d-flex flex-wrap justify-content-between align-items-center py-lg-4 py-md-2 py-0'>
        <img className='d-md-block d-none' height={60} src={Logo} alt="Logo" />
        <div className='d-flex justify-content-center align-items-center gap-5 pb-md-0 pb-4'>
           <div className='d-flex flex-wrap justify-content-center align-items-center gap-5'>
           <Link className='ff-poppins fw-400 fc-secondary fs-18'>+9188988-44044</Link>
           <Link className='ff-poppins fw-400 fc-secondary fs-18'>Msihag028@gmail.com</Link>
           </div>
           <div className='gap-3 d-flex flex-wrap justify-content-center align-items-center'>
           <Link className='svg1' to="https://github.com/MUKESHxSIHAG"><GitHub/></Link>
           <Link className='svg1' to="https://www.linkedin.com/in/mukesh-kumar-72ab2b283/"><Linkedin/></Link>
           <Link className='svg1' to="https://github.com/MUKESHxSIHAG"><Twitter/></Link>
           </div>
        </div> 
    </div>
    <div className='Line'></div>
    <div className='d-flex justify-content-between align-items-center py-4'>
        <Row className='d-flex justify-content-start align-items-center'>
            <Col lg={2} md={3} sm={4} xs={6}>
            <Link><p className='fs-18 fw-400 fc-secondary ff-poppins hvr'>Home</p></Link>
            </Col>

            <Col lg={2} md={3} sm={4} xs={6}>
            <Link><p className='fs-18 fw-400 fc-secondary ff-poppins hvr'>About</p></Link>
            </Col>

            <Col lg={2} md={3} sm={4} xs={6}>
            <Link><p className='fs-18 fw-400 fc-secondary ff-poppins hvr'>Contact</p></Link>
            </Col>

            <Col lg={2} md={3} sm={4} xs={6}>
            <Link><p className='fs-18 fw-400 fc-secondary ff-poppins hvr'>Projects</p></Link>
            </Col>

            <Col lg={2} md={3} sm={4} xs={6}>
            <Link><p className='fs-18 fw-400 fc-secondary ff-poppins hvr'>Technologies</p></Link>
            </Col>
        </Row>
        <p className='text-center ff-poppins fw-600 fc-primary fs-20'>© Designed and built by Mukesh Sihag </p>
    </div>
   </Container>
</section>
</>
  )
}

export default Footer