import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import niotwin from '../../../../assets/img/niotwinner.png'
import desbot from '../../../../assets/img/atal_design.png'
import atwork from '../../../../assets/img/newreplaced.jpg'
import './Achievements.css'

function Posts() {
    return (
        <>
            <div className="section landing-section ">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col lg="4" md="12" className="text-center mb-3">
                            <Card className="achievement-card">
                                <Card.Img src={atwork} className="card-img" />
                                <Card.Body>
                                    <Card.Title>Undergraduate Roboticists</Card.Title>
                                    <p className="card-info">
                                        Selected after a comprehensive recruitment, sharing our love for
                                        robotics, we build low-cost robust AUV systems.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="4" md="12" className="text-center mb-3">
                            <Card className="achievement-card">
                                <Card.Img variant="top" src={desbot} className="card-img" />
                                <Card.Body>
                                    <Card.Title>Ingenious Design & Creativity</Card.Title>
                                    <p className="card-info">
                                        The designing process behind our latest vehicle, ATAL, has
                                        been appreciated at the international level.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="4" md="12" className="text-center mb-3">
                            <Card className="achievement-card">
                                <Card.Img variant="top" src={niotwin} className="card-img" />
                                <Card.Body>
                                    <Card.Title>National Competition Winner</Card.Title>
                                    <p className="card-info">
                                        Twice Runners’ Up (2017 & 2019) at the NIOT SAVe, organised by
                                        the National Insitute Of Ocean Technology, Chennai.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </div>

        </>
    )
}

export default Posts
