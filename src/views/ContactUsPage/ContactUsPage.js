import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from 'reactstrap'
import axios from "../../axios-contact";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import "./ContactUsPage.css"

const ContactUsPage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const postDataHandler = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      message: message,
      email: email
    }
    axios.post('/message.json', data).then(response => {
      console.log(response);
    })

    setName("");
    setEmail("");
    setMessage("");
  }

  const nameChangedHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }

  const messageChangedHandler = (event) => {
    event.preventDefault();
    setMessage(event.target.value);
  }

  const emailChangedHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  }

  return (
    <>
      <ExamplesNavbar activePage="/contact-us" />
      <div className="section text-center ">
        <Container className="reduce-margin">
          <Row>
            <h2 className="heading-contact-us" style={{ textAlign: "center", zIndex: "10" }}>CONTACT US</h2>
          </Row>
        </Container>
      </div>
      <Container className="main">
        <div className="section landing-section">
          <Container className="u-border contact-us-section">
            <Row>
              <Col lg="6" className="contact-us-form-container">
                <h2 className=" heading-small-contact-us">Share Feedback or Ask your Queries </h2>
                <Form className="contact-form" onSubmit={postDataHandler}>
                  <Row>
                    <Col md="12">
                      <label className="mb-0 desc-auv">Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Name"
                          type="text"
                          value={name}
                          onChange={nameChangedHandler} />
                      </InputGroup>
                    </Col>
                    <Col md="12">
                      <label className="mb-0 desc-auv">Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          value={email}
                          onChange={emailChangedHandler} />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label className="mb-0 desc-auv">Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                    value={message}
                    onChange={messageChangedHandler}
                  />
                  <Button className="contact-us-form-button">
                    Send
                  </Button>
                </Form>
              </Col>
              <Col lg="6" className="contact-us-form-container">
                <h2 className="ml-5 small-heading">Contact details</h2>
                <div className="row u-margin-top-large">
                  <Col md="1">
                    <i className="fa fa-phone contact-icon" />
                  </Col>
                  <Col md="10" className="ml-3 mt-4">
                    <p className="desc-auv">Phone Number : +91 9521597992 </p>
                  </Col>

                  <Col md="1">
                    <i className="fa fa-envelope-square contact-icon" />
                  </Col>
                  <Col md="10" className="ml-3 mt-4">
                    <p className="desc-auv">Email id : iitkauv@gmail.com </p>
                  </Col>

                  <Col md="1">
                    <i className="fa fa-map-marker contact-icon" />
                  </Col>
                  <Col md="10" className="ml-3 mt-4">
                    <p className="desc-auv">
                      Address : AUV Room, Hall of Residence 2, Indian
                      Institute of Technology, Kanpur, Uttar Pradesh, India -
                      208016{" "}
                    </p>
                  </Col>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
}

export default ContactUsPage;
