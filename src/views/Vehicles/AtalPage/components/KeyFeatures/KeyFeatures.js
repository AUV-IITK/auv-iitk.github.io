import React from "react";
import { useEffect } from "react";
import "./KeyFeatures.css";
import { Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import specs from "../../data.js";

function Posts() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <div className="mt-5">
                <Container>
                    <div className="title-block">
                        <Row className="mt-5 justify-content-center heading-component">
                            <div style={{ textAlign: 'center', marginBottom:'20px' }}>
                                <h2 style={{ fontSize: "4.5rem", margin:'0' }}>ATAL</h2>
                                {/* <h3 style={{ fontSize: "3rem" }}>The Goddess of Water</h3> */}
                            </div>
                        </Row>
                    </div>

                    <Row className="d-flex col-main justify-content-center">
                        <Col sm="12" lg="8" className="my-auto text-center mt-5">
                            <div className="iframe-container">
                                <iframe style={{ boxShadow: 'none' }} title="A 3D model" className="cad-model sketchfab-responsive" src="https://sketchfab.com/models/b5b6cf667d7a463b87abfa6c48be65ba/embed?autospin=1&autostart=1&preload=1" frameBorder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                            </div>
                        </Col>
                        <Col sm="12" lg="4" className="featureCol my-auto">
                            <div className="briefspec">
                                <Tabs defaultActiveKey="home" id="uncontrolled-tab">
                                    <Tab className="tab-content" eventKey="home" title="Overview">
                                        <div className="my-1 brief">
                                            {specs.brief}
                                        </div>
                                        <div>
                                            <a className="tdr-button" href="" target="_blank" rel="noopener noreferrer">
                                                Report
                                            </a>
                                        </div>
                                    </Tab>
                                    <Tab className="tab-content" eventKey="specs" title="Specifications">
                                        <Table bordered className="my-1">
                                            <tbody>
                                                {
                                                    specs.specsTable.map(
                                                        (data) => (
                                                            <tr key={data.spec}>
                                                                <td style={{ width: '30%', fontWeight: 'bold' }}>{data.name}</td>
                                                                <td>{data.spec}</td>
                                                            </tr>
                                                        )
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Posts;
