// import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Html from '../assets/Images/Html.png'
import Css from '../assets/Images/Css.png'
import Js from '../assets/Images/Js.png'
import Reacts from '../assets/Images/React.png'
import Vector from '../assets/Images/Vector.png'
import Bootstrap from '../assets/Images/Bootstrap.png'
import Tailwind from '../assets/Images/Tailwind.png'
import Sass from '../assets/Images/Sass.png'
import Git from '../assets/Images/Git.png'
import Greensock from '../assets/Images/Greensock.png'
import VScodes from '../assets/Images/VScode.png'
import Github from '../assets/Images/Github.png'

const TechStack = () => {
    return (
        <>
            <section className='pt-sm-5 pt-2 mt-5'>
                <Container>
                    <div className='d-flex justify-content-center align-items-center flex-column text-center'>
                        <h4 className='mb-0 fw-700 ff-montserrat fs-48 fc-primary '>My Tech Stack</h4>
                        <h5 className='pt-2 pb-5 ff-poppins fc-secondary fw-500 fs-32'> Technologies I’ve been working with recently</h5>

                        <Row className=' justify-content-center align-items-center'>
                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2' src={Html} alt="Html" />
                            </Col>

                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2' src={Css} alt="Css" />
                            </Col>

                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2' src={Js} alt="Js" />
                            </Col>

                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2 pt-3 pt-sm-0 pt-sm-3 pt-md-4 pt-lg-0' src={Reacts} alt="ReactJs" />
                            </Col>

                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2 pt-3 pt-sm-0 pt-sm-3 pt-md-4 pt-lg-0' src={Vector} alt="Vector" />
                            </Col>

                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2 pt-3 pt-sm-0 pt-sm-3 pt-md-4 pt-lg-0' src={Bootstrap} alt="Bootstrap" />
                            </Col>

                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2 pt-3 pt-sm-3 pt-md-4 pt-lg-4' src={Tailwind} alt="Tailwind" />
                            </Col>

                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2 pt-3 pt-sm-3 pt-md-4 pt-lg-4' src={Sass} alt="Sass" />
                            </Col>

                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2 pt-3 pt-sm-3 pt-md-4 pt-lg-4' src={Git} alt="Git" />
                            </Col>

                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2 pt-3 pt-sm-3 pt-md-4 pt-lg-4' src={VScodes} alt="VScode" />
                            </Col>

                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2 pt-3 pt-sm-3 pt-md-4 pt-lg-4' src={Greensock} alt="Green Sock" />
                            </Col>

                            <Col lg={2} md={3} sm={4} xs={6}>
                                <img className=' cursor-pointer mine2 pt-3 pt-sm-3 pt-md-4 pt-lg-4' src={Github} alt="Git Hub" />
                            </Col>


                        </Row>


                    </div>

                </Container>
            </section>
        </>
    )
}

export default TechStack