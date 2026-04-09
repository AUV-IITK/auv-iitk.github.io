
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Col, Container, NavLink, Row,
} from "reactstrap";
import './Footer.css'
import logo from "assets/img/logos/whitelogo.png"

function Footer() {
  return (
    <footer className="footer-new">
      <Container>
        <Row className="footer-row">
          <Col lg="6" md="7" className="logo-description mr-auto ml-auto">
            <Row className="align-items-center">
              <Col xs="4" className="my-auto ml-auto mr-auto">
                <img src={logo} className="w-100" style={{ maxWidth: '150px' }} />
              </Col>
              <Col xs="5" className="my-auto mr-auto ml-auto">
                <div className="footer-heading-primary">Team AUV-IITK</div>
                <div className="footer-address">
                  AUV Room, Hall-2,
                  <br />Indian Institute of Technology Kanpur,
                  <br />Uttar Pradesh-208016, India
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg="5" md="6" className="quick-social-links mr-auto ml-auto my-auto">
            <Row>
              <Col md="12" xs="5">
                <div className="footer-links-heading">Quick Links</div>
                <NavLink to="/landing-page" tag={Link} className="footer-nav-link">
                  Home
                </NavLink>
                <NavLink to="/about-us" tag={Link} className="footer-nav-link">
                  About Us
                </NavLink>
                <NavLink to="/team" tag={Link} className="footer-nav-link">
                  Team
                </NavLink>
                <NavLink to="/vehicles/atal" tag={Link} className="footer-nav-link">
                  Vehicles
                </NavLink>
                <NavLink to="/contact-us" tag={Link} className="footer-nav-link">
                  Contact Us
                </NavLink>
              </Col>
              <Col md="12" xs="12" className="my-auto text-center mr-auto ml-auto">
                <div className="nav-icons-container">
                  <NavLink
                    data-placement="bottom"
                    href="https://github.com/AUV-IITK"
                    target="_blank"
                    title="Star on GitHub"
                    className="footer-nav-icon"
                  >
                    <i className="fa fa-github" />
                  </NavLink>
                  <NavLink
                    data-placement="bottom"
                    href="https://www.facebook.com/auviitk"
                    target="_blank"
                    title="Follow us on Facebook"
                    className="footer-nav-icon"
                  >
                    <i className="fa fa-facebook-square" />
                  </NavLink>
                  <NavLink
                    data-placement="bottom"
                    href="https://www.linkedin.com/company/auv-iitk/"
                    target="_blank"
                    title="Reach Out to us on Linkedin"
                    className="footer-nav-icon"
                  >
                    <i className="fa fa-linkedin-square" />
                  </NavLink>
                  <NavLink
                    data-placement="bottom"
                    href="mailto:iitkauv@gmail.com"
                    target="_blank"
                    title="Write to Us"
                    className="footer-nav-icon"
                  >
                    <i className="fa fa-envelope-square" />
                  </NavLink>
                  <NavLink
                    data-placement="bottom"
                    href="https://www.instagram.com/auviitk/"
                    target="_blank"
                    title="Follow us on Instagram"
                    className="footer-nav-icon"
                  >
                    <i className="fa fa-instagram" />
                  </NavLink>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
