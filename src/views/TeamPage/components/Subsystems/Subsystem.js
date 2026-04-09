import React from "react";
import { Link } from "react-router-dom";
import "./Subsystems.css";
import CardContainer from "components/UI/Card/CardContainer";
import { FaGears } from "react-icons/fa6";
import { GiElectricalResistance } from "react-icons/gi";
import { HiCode } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";

function SubS() {
	return (
		<>
			<h2 className="heading-secondary">SUBSYSTEMS</h2>
			<CardContainer>
				<div>
					<div className="center">
						<p className="subSHeading">MECHANICAL</p>
						<span>
							<FaGears size={40} style={{ fill: "#7a90a7" }} />
						</span>
					</div>
					<div className="info-link">
						<p className="info">
							The Mechanical Subsystem is responsible for the design and manufacturing of the vehicle and its associated components. The team works extensively on vehicle architecture, fluid dynamics, actuator mechanisms, and pneumatic systems to ensure optimal performance. From conceptualization to prototyping, we plan, simulate, and rigorously test the structural design of the AUV before manufacturing it using state-of-the-art fabrication techniques. Advanced engineering tools such as SolidWorks and ANSYS are utilized to develop designs that are robust, modular, lightweight, and structurally efficient.
						</p>
						<Link to="/mechanical">
							<p className="link">Know More</p>
						</Link>
					</div>
				</div>
				<div>
					<div className="center">
						<p className="subSHeading">Electrical</p>
						<span>
							<GiElectricalResistance
								size={40}
								style={{ fill: "#7a90a7" }}
							/>
						</span>
					</div>
					<div className="info-link">
						<p className="info">
							The Electrical Subsystem develops the core electronic framework that powers the AUV, including the Power Distribution and Monitoring systems. The team designs and manages the vehicle’s electrical architecture, ensuring reliable power delivery, actuator control, and seamless sensor integration. An STM32 Nucleo microcontroller is used for real-time control of actuators and data acquisition from onboard sensors, which interfaces with an Intel NUC for higher-level processing. The subsystem also designs custom PCBs and serves as the critical link between the mechanical and software subsystems, enabling efficient communication and coordinated system functionality.
						</p>
						<Link to="/electrical">
							<p className="link">Know More</p>
						</Link>
					</div>
				</div>
				<div>
					<div className="center">
						<p className="subSHeading">Software</p>
						<span>
							<HiCode size={40} style={{ fill: "#7a90a7" }} />
						</span>
					</div>
					<div className="info-link">
						<p className="info">
							The Software Subsystem develops the algorithms and control architecture that enable the AUV to operate autonomously. The team leverages modern robotics frameworks and cutting-edge technologies to implement perception, navigation, and control systems for the vehicle. Extensive simulations are carried out in environments such as Gazebo and UWSim to validate system behavior before real-world testing. The primary objective of the subsystem is to develop robust, scalable, and reliable software that efficiently coordinates the vehicle’s motion and ensures optimal performance during missions.
						</p>
						<Link to="/software">
							<p className="link">Know More</p>
						</Link>
					</div>
				</div>
				<div>
					<div className="center">
						<p className="subSHeading">BUSINESS</p>{" "}
						<span className="icon">
							<BsGraphUp size={40} style={{ fill: "#7a90a7" }} />
						</span>
					</div>
					<div className="info-link">
						<p className="info">
							The Business Subsystem manages the team’s funding, sponsorships, and outreach initiatives. The team oversees financial planning and expenditure management while actively engaging with sponsors and partners to secure resources that support the development of the AUV. It is also responsible for maintaining the team’s digital presence through the website and various social media platforms. The primary objective of the Business Subsystem is to ensure sustainable funding and strong outreach, enabling the technical subsystems to operate effectively and focus on innovation and development.
						</p>
						{/* <Link to="/business">
							<p className="link">Know More</p>
						</Link> */}
					</div>
				</div>
			</CardContainer>
		</>
	);
}

export default SubS;
