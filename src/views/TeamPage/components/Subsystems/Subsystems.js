import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
    Accordion,
    Card,
    Container,
    Row,
    Col
} from "react-bootstrap";

import "./Subsystems.css"
import electronics from '../../../../assets/img/electronics.png'
import Software from "./Software"
import Electrical from "./Electrical"
import Mechanical from "./Mechanical"
import Business from "./Business"

function Posts() {
    return (
        <Router>
            <div className="section team-data landing-section">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col className="ml-auto mr-auto" md="12">
                            <h2 className="text-center heading-main">Subsystems</h2>
                        </Col>
                    </Row>
                    <Accordion defaultActiveKey="0">
                        <div className="accordian-section">
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="accordian-toggle text-center">
                                MECHANICAL <i class="fa fa-cogs fa-lg"></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <div>
                                    <Mechanical />
                                </div>
                            </Accordion.Collapse>
                        </div>
                        <div className="accordian-section">
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="accordian-toggle text-center">
                                ELECTRICAL <img src={electronics} style={{ width: "25px", height: "25px" }} />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <div>
                                    <Electrical />
                                </div>
                            </Accordion.Collapse>
                        </div>
                        <div className="accordian-section">
                            <Accordion.Toggle as={Card.Header} eventKey="2" className="accordian-toggle text-center my-auto">
                                SOFTWARE <i class="fa fa-code fa-lg" />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <div>
                                    <Software />
                                </div>
                            </Accordion.Collapse>
                        </div>
                        <div className="accordian-section">
                            <Accordion.Toggle as={Card.Header} eventKey="3" className="accordian-toggle text-center">
                                BUSINESS <i class="fa fa-briefcase fa-lg"></i>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <div>
                                    <Business />
                                </div>
                            </Accordion.Collapse>
                        </div>
                    </Accordion>
                </Container>
            </div>
        </Router>
    );


}
export default Posts;