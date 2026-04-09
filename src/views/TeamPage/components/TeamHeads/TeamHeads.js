import React from 'react';
//import teamphoto from "assets/img/team-photo.jpg"
import teamphoto from "assets/img/DSC02829.jpg"
import { useEffect } from "react";

import "./TeamHeads.css"
import {
    Col,
    Container,
    Row
} from "react-bootstrap";
import teamheads from "../../../../data/TeamHeads.json";

function TeamHeads() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <div style={{ marginTop: "8rem", padding: "20px" }}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="text-center heading-main">OUR TEAM</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12" sm="12" className="description">
                            <img src={teamphoto} className="w-100 text-center"></img>
                            <p className="mb-4 mt-4">Over the past years, the team has witnessed a close collaboration between students from various departments coming and sharing ideas; creating a small yet strong network of people who are eagerly looking for a low-cost solution to large-scale problems.</p>
                            <p className="mb-3 ">Working long hours and brainstorming some complex problems leads to a very special bonding between the members of the teams. This leads to a lot of nicknames and some extremely fun gaming nights.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="section team-data text-center">
                <Container>
                    {
                        teamheads.teamData.map((section) => {
                            return (
                                <div key={""}>
                                    <Row className="justify-content-center">
                                        {section.items.map((teamMember) => {
                                            const isProf = section.heading === "Faculty Advisor";
                                            return (
                                                <Col lg={isProf ? "5" : "3"} md={isProf ? "8" : "6"} className="team text-center" key={teamMember.name}>
                                                    <div className="alignment">
                                                        <div className="member">
                                                            <div className="member-img">
                                                                <div className="overlay">
                                                                    <img src={require("assets/img/" + teamMember.image)}
                                                                        className="member-img img-fluid" alt="" />
                                                                </div>
                                                                <div>
                                                                    <br></br>
                                                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                                                        <a href={teamMember.facebook} target='_blank' rel="noopener noreferrer"><i className="fa fa-facebook fa-2x" /></a>
                                                                        <a href={teamMember.linkedin} target='_blank' rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x" /></a>
                                                                        {teamMember.mailid && <a href={`mailto:${teamMember.mailid}`} target='_blank' rel="noopener noreferrer"><i className="fa fa-envelope fa-2x" /></a>}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="member-info">
                                                                <h5>{teamMember.name}</h5>
                                                                <span>{teamMember.subheading}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </div>
                            )
                        })
                    }
                </Container>
            </div>
        </>
    )
}
export default TeamHeads;
