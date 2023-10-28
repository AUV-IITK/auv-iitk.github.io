/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
// import {
//     Button,
//     Card,
//     CardBody,
//     CardFooter,
//     CardTitle,
//     Form,
//     Input,
//     InputGroupAddon,
//     InputGroupText,
//     InputGroup,
//     Container,
//     Row,
//     Col
// } from "reactstrap";

import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";

// core components
import TeamVideo from "./components/TeamVideo/TeamVideo";
import LegacyCarousel from "./components/LegacyCarousel/LegacyCarousel";
import TeamHeads from "./components/TeamHeads/TeamHeads";
import SubS from "./components/Subsystems/Subsystem";

import FadeIn from "views/Animations/FadeIn";
function LandingPage() {
	document.documentElement.classList.remove("nav-open");
	React.useEffect(() => {
		document.body.classList.add("profile-page");
		return function cleanup() {
			document.body.classList.remove("profile-page");
		};
	});
	return (
		<div>
			<ExamplesNavbar activePage="/team" />
			<div className="main">
				<FadeIn>
					<TeamHeads />
				</FadeIn>
				<FadeIn>
					<SubS />
				</FadeIn>
				<FadeIn>
					<LegacyCarousel />
				</FadeIn>
				<FadeIn>
					<TeamVideo />
				</FadeIn>
			</div>
		</div>
	);
}

export default LandingPage;
