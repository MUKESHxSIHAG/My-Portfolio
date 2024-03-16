// import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { CardSection } from './Helper'
import { Link } from 'react-router-dom'

const Map = () => {
    return (
        <>
            <Container>
                <Row className='mt-5 pt-5'>
                    <h2 className='text-center fc-primary fw-700 ff-poppins fs-48'>PROJECTS</h2>
                    <h3 className='text-center pb-5 mb-2 fc-secondary fw-500 ff-poppins fs-32'>Things I've built so far</h3>
                    {CardSection.map((data) => {
                        return (
                            <>
                            <Col lg={4} md={6}>
                                <div className='d-flex justify-content-center align-items-center text-center my-3'>
                                    <div className='rounded-4 cardBorder pb-5'>
                                        <img className='w-100 rounded-top-4' height={210} src={data.img} alt="" />
                                        <h2 className='mt-4 mb-0'>
                                            {data.heading}
                                        </h2>
                                        <p className='mt-3'>
                                            {data.paragraph}
                                        </p>
                                        <div className='d-flex justify-content-between align-items-center px-4'>
                                        <Link className='fw-600 ff-montserrat fc-light1 fs-20'>{data.btn}</Link>
                                        {/* <Link>{data.code}</Link> */}
                                        <Link target='_blank' to={data.pathName}>{data.code}</Link>
                                        </div>

                                    </div>

                                </div>
                            </Col>
                            </>
                        );
                    }

                    )}

                </Row>
            </Container>

        </>
    )
}

export default Map
