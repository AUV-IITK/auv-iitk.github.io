import React from "react";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardTitle,
	Col,
	Container,
	Row,
} from "reactstrap";
import "./SubsystemHeads.css";
import team from "../../../../data/TeamMembers.json";

function TalkAbout() {
	// console.log(String(team.teamData[0].items[0].image));
	return (
		<>
			<div className="section text-center">
				<Container>
					{team.teamData.map((section) => {
						// console.log(section);
						return (
							<div key={""}>
								<h1 className="title heading-main">
									{section.heading}
								</h1>
								<div>
									<Row>
										{section.items.map((teamMember) => {
											// console.log(teamMember);
											return (
												<Col
													lg="3 ml-auto mr-auto"
													sm="6"
													key={teamMember.name}
												>
													<Card className="card-profile card-plain card-auv">
														<CardBody>
															<a
																href="#pablo"
																onClick={(e) =>
																	e.preventDefault()
																}
															>
																<div className="author">
																	<img
																		alt="..."
																		src={require("assets/img/" +
																			teamMember.image)}
																		className="image-prof"
																	/>
																	<></>
																	<CardTitle
																		tag="h4"
																		className="auv-description-primary pt-3"
																	>
																		{
																			teamMember.name
																		}
																	</CardTitle>
																	<h6 className="auv-description-primary">
																		{" "}
																		{
																			teamMember.subheading
																		}
																	</h6>
																</div>
															</a>
														</CardBody>
														<CardFooter className="text-center margin-neg">
															<Button
																className="btn-just-icon btn-neutral"
																color="link"
																href="#pablo"
																onClick={(e) =>
																	e.preventDefault()
																}
															>
																<i className="fa fa-facebook flip" />
															</Button>
															<Button
																className="btn-just-icon btn-neutral ml-1"
																color="link"
																href="#pablo"
																onClick={(e) =>
																	e.preventDefault()
																}
															>
																<i className="fa fa-linkedin flip" />
															</Button>
														</CardFooter>
													</Card>
												</Col>
											);
										})}
									</Row>
								</div>
							</div>
						);
					})}
				</Container>
			</div>
		</>
	);
}

export default TalkAbout;
