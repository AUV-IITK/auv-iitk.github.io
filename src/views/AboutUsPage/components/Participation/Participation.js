import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import combinedimage from '../../../../assets/img/competitions.jpg'
import resimage from '../../../../assets/img/research.jpg'
import csrimage from '../../../../assets/img/csr2025.jpeg'
import trainimage from '../../../../assets/img/training2025.png'
import './Participation.css'

function Posts() {
    return (
        <>
            <div className="section landing-section">
                <Container className="text-center">
                    <Tabs defaultActiveKey="studentcompetitions" id="uncontrolled-tab-example" className="">
                        <Tab eventKey="studentcompetitions" title="Competitions" className="tab-body">
                            <Row>
                                <Col md="6" className="my-auto">
                                    <h2 className="mt-0 mb-3 tab-heading">Student Competitions</h2>
                                    <p className="tab-content">
                                        We aim to participate in National and International
                                        student-level AUV compeititions - Robosub (organised by RoboNation),
                                        Singapore AUV Challenge, and the NIOT-Student AUV Challenge.
                                    </p>
                                </Col>
                                <Col md="6" className="text-center">
                                    <img src={combinedimage} className="tab-image" />
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="researchpotential" title="Research" className="tab-body">
                            <Row>
                                <Col md="6" className="my-auto">
                                    <h2 className="mt-0 mb-3 tab-heading">Research Potential</h2>
                                    <p className="tab-content">
                                        Advance the field of marine technology by incorporating cutting-edge research and innovative engineering solutions into the design and development of our autonomous underwater vehicles.
                                    </p>
                                </Col>
                                <Col md="6" className="text-center">
                                    <img src={resimage} className="tab-image" />
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="training" title="Training" className="tab-body">
                            <Row>
                                <Col md="6" className="my-auto">
                                    <h2 className="mt-0 mb-3 tab-heading">Training</h2>
                                    <p className="tab-content">
                                        Team AUV-IITK provides training to all its new recruits in the
                                        various field of Robotics. It is because of this training that
                                        many of the past members of team AUV-IITK are pursuing their
                                        careers in robotics and doing exceptionally well owing to their
                                        strong foundation.
                                    </p>
                                </Col>
                                <Col md="6" className="text-center">
                                    <img src={trainimage} className="mt-3 mb-3 tab-image" />
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="socialprojects" title="Community" className="tab-body">
                            <Row>
                                <Col md="6" className="my-auto">
                                    <h2 className="mt-0 mb-3 tab-heading">Outreach Events</h2>
                                    <p className="tab-content">
                                        Beyond competitions, Team AUV-IITK undertakes outreach initiatives aimed at expanding access to STEM education. Through exhibitions, workshops, and collaborative sessions with sponsors, we engage and inspire students, promoting innovation and technological learning within the community.
                                    </p>
                                </Col>
                                <Col md="6" className="text-center">
                                    <img src={csrimage} className="tab-image" />
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Container>
            </div>

        </>
    )
}

export default Posts
