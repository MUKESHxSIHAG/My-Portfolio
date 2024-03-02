// import React from 'react'

import { Col, Container, Row } from "react-bootstrap";
import Mine from "../assets/Images/Mine.png"

const HeroSection = () => {
  return (
<>
<Container className="pt-custom">
<Row className="justify-content-center align-items-center">
<Col lg={6} className="order-lg-0 order-1">
<section className="">
    <h2 className="fc-primary fw-700 fs-58">Hi 👋,
<span className="d-block">My name is</span>
<span className="d-block">Mukesh Sihag</span>
I build things for web</h2>
</section>
</Col>
<Col lg={6} className="order-lg-1 order-0" >
<div className="d-flex justify-content-lg-end justify-content-center">
    <img className="w-75 mine1" src={Mine} alt="Mine" />
</div>
</Col>
</Row>

</Container>
</>
  )
}

export default HeroSection