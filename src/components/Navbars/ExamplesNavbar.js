import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import auvlogomini from "../../assets/img/logos/logo_v1.32.png";
import "./ExamplesNavbar.css";
// reactstrap components
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
} from "reactstrap";

function ExamplesNavbar(props) {
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 850) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navbar", "custom-navbar-auv"];
  if (props.page === "landing-page") {
    if (scrolled) {
      x.push("scrolled");
    }
  } else x.push("scrolled");

  return (
    <div className={x.join(" ")}>
      <Navbar color-on-scroll="300" expand="lg" className="custom-navbar-auv">
        <Container className="navbar-container">
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/index"
              title="Coded by Creative Tim"
              tag={Link}
              style={{ marginLeft: "20px", padding: "0 0" }}
            >
              <img className="minilogo w-100" src={auvlogomini} alt="logo" />
            </NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames(
                "navbar-toggler navbar-toggler u-margin-zero",
                {
                  toggled: navbarCollapse,
                }
              )}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className=" justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar className=" mr-5 navigation">
              <NavItem>
                <NavLink
                  className={
                    props.activePage === "/landing-page"
                      ? "navbar-content active"
                      : "navbar-content"
                  }
                  to="/landing-page"
                  tag={Link}
                  onClick={toggleNavbarCollapse}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    props.activePage === "/about-us"
                      ? "navbar-content active"
                      : "navbar-content"
                  }
                  to="/about-us"
                  tag={Link}
                  onClick={toggleNavbarCollapse}
                >
                  About Us
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink className={props.activePage === "/team" ? "navbar-content active" : "navbar-content"} to="/team" tag={Link} onClick={toggleNavbarCollapse}>
                  Team
                </NavLink>
              </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="black"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="dropdownMenuButton"
                  nav
                  onMouseEnter={e => e.preventDefault()}
                  role="button"
                  style={{ textAlign: 'center' }}
                  className={props.activePage === "/mechanical" || props.activePage === "/electrical" || props.activePage === "/software" || props.activePage === "/management" ? "navbar-content active" : "navbar-content"}
                >
                  Team
                </DropdownToggle>
                <DropdownMenu

                  aria-labelledby="dropdownMenuButton"
                  className="dropdown-info ml-auto mr-auto"
                  style={{ borderRadius: "0", textAlign: "center" }}
                >
                  <Link to='/team'>
                    <DropdownItem
                      style={{ textAlign: "center" }}
                      className="auv-dropdown"
                      onClick={toggleNavbarCollapse}
                    >
                      Overview
                    </DropdownItem>
                  </Link>
                  <Link to='/mechanical'>
                    <DropdownItem
                      style={{ textAlign: "center" }}
                      className="auv-dropdown"
                      onClick={toggleNavbarCollapse}
                    >
                      Mechanical
                    </DropdownItem>
                  </Link>
                  <Link to='/electrical'>
                    <DropdownItem
                      style={{ textAlign: "center" }}
                      className=" auv-dropdown"
                      onClick={toggleNavbarCollapse}
                    >
                      Electrical
                    </DropdownItem>
                  </Link>
                  <Link to='/software'>
                    <DropdownItem
                      style={{ textAlign: "center" }}
                      className="auv-dropdown"
                      onClick={toggleNavbarCollapse}
                    >
                      Software
                    </DropdownItem>
                  </Link>
                  {/* <Link to='/business'>
                    <DropdownItem
                      style={{ textAlign: "center" }}
                      className="auv-dropdown"
                      onClick={toggleNavbarCollapse}
                    >
                      Business
                    </DropdownItem>
                  </Link> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  className={
                    props.activePage === "/events"
                      ? "navbar-content active"
                      : "navbar-content"
                  }
                  to="/events"
                  tag={Link}
                  onClick={toggleNavbarCollapse}
                >
                  Events
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="black"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="dropdownMenuButton"
                  nav
                  onClick={(e) => e.preventDefault()}
                  role="button"
                  style={{ textAlign: "center" }}
                  className={
                    props.activePage === "/vehicles/anahita" ||
                    props.activePage === "/vehicles/varun"
                      ? "navbar-content active"
                      : "navbar-content"
                  }
                >
                  Vehicles
                </DropdownToggle>
                <DropdownMenu
                  aria-labelledby="dropdownMenuButton"
                  className="dropdown-info ml-auto mr-auto"
                  style={{ borderRadius: "0", textAlign: "center" }}
                >
                  {/* <Link to="/vehicles/tarang">
                    <DropdownItem
                      style={{ textAlign: "center" }}
                      className="auv-dropdown"
                      onClick={toggleNavbarCollapse}
                    >
                      Tarang
                    </DropdownItem>
                  </Link> */}
                  <Link to="/vehicles/atal">
                    <DropdownItem
                      style={{ textAlign: "center" }}
                      className="auv-dropdown"
                      onClick={toggleNavbarCollapse}
                    >
                      Atal
                    </DropdownItem>
                  </Link>
                  <Link to="/vehicles/anahita">
                    <DropdownItem
                      style={{ textAlign: "center" }}
                      className=" auv-dropdown"
                      onClick={toggleNavbarCollapse}
                    >
                      Anahita
                    </DropdownItem>
                  </Link>
                  <Link to="/vehicles/varun">
                    <DropdownItem
                      style={{ textAlign: "center" }}
                      className="auv-dropdown"
                      onClick={toggleNavbarCollapse}
                    >
                      Varun
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  className={
                    props.activePage === "/blogs"
                      ? "navbar-content active"
                      : "navbar-content"
                  }
                  to="/blogs"
                  tag={Link}
                >
                  Blogs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    props.activePage === "/contact-us"
                      ? "navbar-content active"
                      : "navbar-content"
                  }
                  to="/contact-us"
                  tag={Link}
                >
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/auviitk/"
                  target="_blank"
                  title="Like us on Instagram"
                  style={{ textAlign: "center", color: "white" }}
                >
                  <i className="fa fa-instagram nav-social" />
                  <p className="d-lg-none" style={{ color: "white" }}>
                    Instagram
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/auviitk"
                  target="_blank"
                  title="Like us on Facebook"
                  style={{ textAlign: "center", color: "white" }}
                >
                  <i className="fa fa-facebook-square nav-social" />
                  <p className="d-lg-none" style={{ color: "white" }}>
                    Facebook
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="https://github.com/AUV-IITK"
                  target="_blank"
                  title="Star on GitHub"
                  style={{ textAlign: "center", color: "white" }}
                >
                  <i className="fa fa-github nav-social" />
                  <p className="d-lg-none" style={{ color: "white" }}>
                    GitHub
                  </p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default ExamplesNavbar;
