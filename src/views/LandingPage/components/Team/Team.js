import React from 'react';
//import teamphoto from "assets/img/team-photo.jpg"
import teamphoto from "assets/img/DSC02829.jpg"
import { Link } from 'react-router-dom';
import {useEffect} from "react";

import "./Team.css"
import {
 
    Col,
    Container,
    Row
} from "reactstrap";

function Team() {
    useEffect(() => {
        window.scrollTo(0, 0)
      });
    return (
        <div style={{marginTop:"8rem"}}>
            <div className="">
                <Container style={{textAlign:"center"}}>
                    <Row>
                        <Col className="" md="12">
                            <h2 className="text-center heading-main">OUR TEAM</h2>
                            <img src={teamphoto} className="w-100 "></img>
                            <p className="description text-center mb-2 auv-description-primary">Over the past years, the team has witnessed a close collaboration between students from various departments coming and sharing ideas; creating a small yet strong network of people who are eagerly looking for a low-cost solution to large-scale problems.</p>
                            <p className="description text-center mb-3 auv-description-primary">Working long hours and brainstorming some complex problems leads to a very special bonding between the members of the teams. This leads to a lot of nicknames and some extremely fun gaming nights.</p>
                        </Col>
                        <Link to='/team' className="mt-3 blogs-more-button ml-auto mr-auto">
                        More
                        </Link>
                    </Row>
                </Container>
            </div>

        </div>
  )
}
export default Team;
