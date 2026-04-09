import React from "react";
import {
    Col,
    Container,
    Row
} from "reactstrap";
import mechanicalteam from "../../../../data/MechanicalTeam_2025.json";
import electricalTeam from "../../../../data/ElectricalTeam_2025.json";
import softwareTeam from "../../../../data/SoftwareTeam_2025.json";
import businessTeam from "../../../../data/BusinessTeam.json";
import FadeIn from "views/Animations/FadeIn";
import './card.css';

const TeamCard = ({ teamMember, idPrefix }) => {
    return (
        <div className="card" style={{backgroundImage: `url(${require("assets/img/" + teamMember.image)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className="footer">
                <div className="connections">
                    <div className="connection facebook"><div className="icon"><a href={teamMember.facebook} target='_blank' rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></div></div>
                    <div className="connection twitter"><div className="icon"><a href={teamMember.linkedin} target='_blank' rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></div></div>
                    <div className="connection behance"><div className="icon"><a href={`mailto:${teamMember.mailid}`} target='_blank' rel="noopener noreferrer"><i className="fa fa-envelope"></i></a></div></div>
                </div>
                <svg className="curve-svg" viewBox="0 0 400 450" preserveAspectRatio="none">
                    <path id={`${idPrefix}-p`} d="M0,200 Q80,100 400,200 V150 H0 V50" transform="translate(0 300)" />
                    <rect id={`${idPrefix}-dummyRect`} x="0" y="0" height="450" width="400" fill="transparent" />
                    <animate href={`#${idPrefix}-p`} attributeName="d" to="M0,50 Q80,0 400,50 V150 H0 V50" fill="freeze" begin={`${idPrefix}-dummyRect.mouseover`} end={`${idPrefix}-dummyRect.mouseout`} dur="0.15s" id={`${idPrefix}-bounce2`} />
                    <animate href={`#${idPrefix}-p`} attributeName="d" to="M0,50 Q80,80 400,50 V150 H0 V50" fill="freeze" begin={`${idPrefix}-bounce2.end`} end={`${idPrefix}-dummyRect.mouseout`} dur="0.15s" id={`${idPrefix}-bounce3`} />
                    <animate href={`#${idPrefix}-p`} attributeName="d" to="M0,50 Q80,45 400,50 V150 H0 V50" fill="freeze" begin={`${idPrefix}-bounce3.end`} end={`${idPrefix}-dummyRect.mouseout`} dur="0.1s" id={`${idPrefix}-bounce4`} />
                    <animate href={`#${idPrefix}-p`} attributeName="d" to="M0,50 Q80,50 400,50 V150 H0 V50" fill="freeze" begin={`${idPrefix}-bounce4.end`} end={`${idPrefix}-dummyRect.mouseout`} dur="0.05s" id={`${idPrefix}-bounce5`} />
                    <animate href={`#${idPrefix}-p`} attributeName="d" to="M0,200 Q80,100 400,200 V150 H0 V50" fill="freeze" begin={`${idPrefix}-dummyRect.mouseout`} dur="0.15s" id={`${idPrefix}-bounceOut`} />
                </svg>
                <div className="info">
                    <div className="name">{teamMember.name}</div>
                    <div className="job">{teamMember.subheading}</div>
                </div>
            </div>
            <div className="card-blur"></div>
        </div>
    );
};

function TeamHeads(props) {
    let data = {};
    if (props.subsystem === 'mechanical') {
        data = mechanicalteam;
    }
    else if (props.subsystem === 'electrical') {
        data = electricalTeam;
    }
    else if (props.subsystem === 'software') {
        data = softwareTeam;
    }
    else if (props.subsystem === 'business') {
        data = businessTeam;
    }

    const teamHeads = data.teamData[0].items.filter((member) => {
        return member.subheading.includes("Subsystem Head");
    });

    const seniorMembers = data.teamData[0].items.filter((member) => {
        return member.subheading.includes("Senior Member");
    });

    const teamMembers = data.teamData[0].items.filter((member) => {
        return member.subheading.includes("Junior Member");
    });

    return (
        <Container>
            <Row>
                <div style={{width: '100%'}}>
                    <h1 className="subsystem-headings heading-main">Team Heads</h1>
                    <Container>
                        <FadeIn>
                            <div>
                                <Row>
                                    {teamHeads.map((teamMember, index) => {
                                        return (
                                            <Col lg="6" md="6" className="team img-center text-center mr-auto ml-auto" key={teamMember.name} style={{margin:'1%'}}>
                                                <TeamCard teamMember={teamMember} idPrefix={`head-${index}`} />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </div>
                        </FadeIn>
                        <br />        
                    </Container>

                    {seniorMembers.length !== 0 && (
                        <>
                            <h1 className="subsystem-headings heading-main">Senior Members</h1>
                            <Container>
                                <FadeIn>
                                    <div>
                                        <Row style={{display: 'flex', flexWrap: 'wrap', marginBottom:'1%'}}>
                                            {seniorMembers.map((teamMember, index) => {
                                                return (
                                                    <Col lg="6" md="6" className="team img-col text-center mr-auto ml-auto" key={teamMember.name} style={{margin:'1%'}}>
                                                        <TeamCard teamMember={teamMember} idPrefix={`senior-${index}`} />
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </div>
                                </FadeIn>
                            </Container>
                        </>
                    )}

                    {teamMembers.length !== 0 && (
                        <>
                            <h1 className="subsystem-headings heading-main">Junior Members</h1>
                            <Container>
                                <FadeIn>
                                    <div>
                                        <Row style={{display: 'flex', flexWrap: 'wrap', marginBottom:'1%'}}>
                                            {teamMembers.map((teamMember, index) => {
                                                return (
                                                    <Col lg="4" md="3" className="team img-col text-center mr-auto ml-auto" key={teamMember.name} style={{margin:'1%'}}>
                                                        <TeamCard teamMember={teamMember} idPrefix={`junior-${index}`} />
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </div>
                                </FadeIn>
                            </Container>
                        </>
                    )}
                </div>
            </Row>
        </Container>
    );
}

export default TeamHeads;
