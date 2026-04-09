import React from "react";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

import "./subs.css";
import specs from "../../data.js";

import FadeIn from "../../../../Animations/FadeIn";

function Posts() {
    // // console.log(specs);
    return (
        <>
            {
                <div className="section landing-section">
                    <Container>
                        <div className="title-block">
                            <Row className="justify-content-center heading-components">
                                <div style={{ textAlign: 'center' }}>
                                    <b style={{ fontSize: "4rem" }}>COMPONENTS</b>
                                </div>
                            </Row>
                        </div>
                        <Row className="subsystem-headings">
                            <h3>Mechanical</h3>
                        </Row>
                        <FadeIn>
                            <div className="spec-container">
                                <Row>
                                    <Col lg="1"></Col>
                                    <Col lg="10" className="featureCol my-auto">
                                        While the design of our previous AUV, Anahita, received international recognition, it exhibited several critical limitations. The use of multiple hulls increased the risk of leakages, which frequently led to damage of sensitive electronic components during pool testing. Additionally, the segmented hull structure and numerous casings significantly restricted access to internal systems, complicating maintenance and rapid intervention. The hull configuration also contributed to increased hydrodynamic drag, negatively impacting maneuverability and overall efficiency. Furthermore, the use of acrylic—a poor thermal conductor—resulted in inadequate heat dissipation, leading to performance degradation and, at times, failure of essential electronics. These challenges informed and inspired the improvements implemented in the design of our new AUV-<b>Atal</b>.
                                        <Accordion defaultActiveKey="">
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey="2000">
                                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
                                                    Main Hull
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2000">
                                                    <Card.Body>
                                                        <div>
                                                            One of the most significant improvements in our current AUV design is the transition to a <b>single main hull architecture</b>. Constructed primarily from <b>aluminium</b>, the hull provides excellent strength and rigidity, ensuring structural integrity under pressure. This unified design greatly enhances system simplicity, reducing the need for multiple penetrators that were previously required for separate compartments. In earlier iterations, these penetrators were a major source of leakage issues, often making it difficult to locate and address faults.
                                                        </div>
                                                        <div>
                                                            By consolidating components into a single hull, we can now perform leak tests more efficiently, often without even needing to submerge the vehicle. To improve accessibility and visual coverage, the main hull incorporates a dedicated camera dome with a <b>270-degree front-facing field of view</b>, designed in a circular form for optimal visibility.
                                                        </div>

                                                        <div>
                                                            Additionally, the top face of the hull is made from <b>transparent acrylic</b>, enabling non-invasive visual inspection of internal electronics and fluid ingress points. This design choice allows the team to monitor for leakage, condensation, or circuit anomalies without opening the hull—significantly improving turnaround time during testing and deployment.
                                                        </div>
                                                        <div style={{ display: 'grid', placeItems: 'center' }}>

                                                            <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/atal/atal_hull.jpeg")} />
                                                            <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                A view of Atal's hull design.
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        {
                                            specs.mechanical.map(
                                                (data) => (
                                                        <Card className="card-plain spec-card" key={data.title}>
                                                            <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
                                                                {data.title}
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse eventKey={String(data.id)}>
                                                                <Card.Body>
                                                                    <div>
                                                                        {data.content}
                                                                    </div>

                                                                    <div style={{ display: 'grid', placeItems: 'center' }}>

                                                                        {data.img && <img className={(data.img === 'md working2.PNG') ? 'w-50' : 'w-75' + ' accord-img'} alt="spec-img" src={require("assets/img/atal/" + data.img)} />}
                                                                        <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                            {data.imgDesc}
                                                                        </div>
                                                                    </div>
                                                                </Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                )
                                            )
                                        }
                                        </Accordion>
                                    </Col>
                                    <Col lg="1"></Col>
                                </Row>
                            </div>
                        </FadeIn>
                        <Row className="subsystem-headings">
                            <h3>Electrical</h3>
                        </Row>
                        <FadeIn>
                            <div className="spec-container">
                                <Row>
                                    <Col lg="1"></Col>
                                    <Col lg="10" className="my-auto featureCol">
                                        <div>Atal's electrical system comprises power sources, sensors, actuators, and all the computational hardware required to execute autonomous underwater missions. This year, we have developed custom PCBs tailored for various subsystems. A notable addition is a dedicated <b>power management board</b>, which handles real-time power monitoring and efficient distribution to all modules. The power system incorporates <b>custom-designed buck</b> and <b>boost converters</b>, engineered to meet our specific voltage and current requirements, while maintaining flexibility in both layout and connectivity.</div>
                                        <br />

                                        <div>
                                            In place of traditional Arduino-based solutions, we have engineered a <b>custom microcontroller board</b>, replacing the bulky Arduino Mega + shield configuration. This redesign significantly reduces PCB footprint and cost, while eliminating unused GPIO overhead present in the previous design. The system <b>utilizes two ESC (Electronic Speed Controller) boards</b>, each managing eight ESCs, with one ESC per board configured as a backup for redundancy in case of failure. Internally, the hull features a <b>two-layer stacked architecture</b> for structured and modular mounting of electronic components.

                                        </div>
                                        <div style={{ marginBottom: '20px' }}></div>
                                        <Accordion defaultActiveKey="">
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey="2001">
                                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                    Power Distribution
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2001">
                                                    <Card.Body>
                                                        <div>
                                                            We use two 14.8V 18Ah batteries to power the complete system. One battery is wholly dedicated to the thrusters, which have high power consumption, and cameras with low power consumption, ensuring the supply voltage remains within the battery voltage range. The other battery powers all the remaining electronics by generating 12V and 19V using high-efficiency buck and boost converters, respectively. The microcontroller on the power board features a display and multiple LED indicators for battery monitoring and threat alarming.
                                                        </div>
                                                        <br />

                                                        <div><b>Custom made Boost Converter</b></div>
                                                        <div>The custom boost converter powers the onboard computer, which operates at 19V. As the power rating for the computer is high (54W), the boost converter had to be very efficient, as the computer remains powered on for the entire duration of the mission.
                                                            <div style={{ display: 'grid', placeItems: 'center' }}>
                                                                <img className="w-50 accord-img" alt="spec-img" src={require("assets/img/tarang/boost_render.png")} />
                                                                <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                    Boost Converter
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />

                                                        <div><b>Custom made Buck Converter</b></div>
                                                        <div>Most of the low-power electronics are powered through the custom-designed buck converter, which outputs 12V. We ensured high efficiency in the buck to minimize power losses. The power is controlled through the buck converter using microcontroller GPIO, enabling us to completely turn it off and save power.
                                                            <div style={{ display: 'grid', placeItems: 'center' }}>
                                                                <img className="w-50 accord-img" alt="spec-img" src={require("assets/img/tarang/buck_render.png")} />
                                                                <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                    Buck Converter
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br />

                                                        <div><b>5V power supply for servo</b></div>
                                                        <div>The 5V power supply required for driving the servos is created through a regulator using the 12V input from the buck. The power losses of the regulator are insignificant, as it is turned on only for the duration of servo usage. This saves a lot of space and cost that would be spent on making or using another buck converter. We used the RP2040 microcontroller module on the power board to build a robust and compact solution while getting sufficient GPIOs for sensors and other peripherals.
                                                        </div>

                                                        <div style={{ display: 'grid', placeItems: 'center' }}>
                                                            <img className="w-100 accord-img" alt="spec-img" src={require("assets/img/tarang/electrical_architecture.jpg")} />
                                                            <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                Atal's Electrical Architecture
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        <div style={{ marginBottom: '20px' }}></div>
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey="2002">
                                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                    Kill Switch and Safety Mechanisms
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2002">
                                                    <Card.Body>
                                                        <div>
                                                            The power management board in the vehicle handles <b>undervoltage and overcurrent faults</b>. We use a <b>Hall effect current sensor (ACS-712)</b> to measure the current flowing through each battery and a <b>simple resistive voltage divider</b> for battery voltage measurement.

                                                        </div>
                                                        <br />

                                                        <div>
                                                            The <b>Kill Switch mechanism</b> has been upgraded using a <b>PMOS</b>, with the gate voltage toggled through a <b>reed switch</b>. This provides a <b>connector-free interface</b> for the kill switch, ensuring improved waterproofing. The system includes <b>two kill switches</b> for redundancy and increased safety.
                                                        </div>
                                                        <br />

                                                        <div>
                                                            The vehicle also features an <b>internal pressure sensor (BMP388)</b>, which is used to test for leakage before underwater deployment by measuring whether the hull maintains the applied relative drop in pressure. Additionally, the <b>temperature reading from the same BMP388</b> can be used to safely shut down ICs that lack a default thermal shutdown mechanism.
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        <div style={{ marginBottom: '20px' }}></div>
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey="2003">
                                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                    Sensor Integration and Computational Interface
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2003">
                                                    <Card.Body>
                                                        <div>
                                                            Integration of industrial sensors and direct interfacing with the onboard computer enables robust and real-time state estimation. This year, we have upgraded to <b>iDS uEye industrial cameras</b> for improved color accuracy and enhanced focus capabilities. With the addition of a newly introduced <b>network switch</b>, the camera feed is now transferred directly to the GPU for object detection and recognition.
                                                        </div>
                                                        <br />

                                                        <div>
                                                            The <b>external LAN</b> and the <b>onboard computer</b> now have direct control over both the cameras and the GPU. The newly designed <b>microcontroller board</b> has been optimized to significantly reduce its physical size by utilizing only the necessary GPIO pins. It also neatly organizes connectors for the <b>actuator</b>, <b>manipulator</b>, and several other peripherals.

                                                        </div>
                                                        <div style={{ display: 'grid', placeItems: 'center' }}>
                                                            <img className="w-100 accord-img" alt="spec-img" src={require("assets/img/tarang/esc_render.png")} />
                                                            <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                ESC Board
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        <div style={{ marginBottom: '20px' }}></div>
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey="2004">
                                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                    Onboard Computer
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2004">
                                                    <Card.Body>
                                                        <div>
                                                            The onboard computer, an <b>Intel NUC</b> powered by an <b>Intel Core i7 processor</b>, handles <b>real-time image processing</b>, <b>object detection</b>, and all major computational tasks. It is powerful enough to run all necessary algorithms during the mission.
                                                        </div>
                                                        <br />

                                                        <div>
                                                            The <b>Intel NUC</b> acts as the <b>central processing unit</b>, interfacing with all sensors and actuators either <b>directly</b> or <b>via the microcontroller</b> on the custom power board. This layered architecture ensures efficient task delegation and better system stability.
                                                        </div>
                                                        <br />

                                                        <div>
                                                            The <b>new industrial camera</b> is now interfaced via <b>Ethernet</b>, replacing the earlier USB connection, resulting in improved data transfer speed and reliability.
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        {
                                            specs.electrical.map(
                                                (data) => (
                                                        <Card className="card-plain spec-card" key={data.title}>
                                                            <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                                {data.title}
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse eventKey={String(data.id)}>
                                                                <Card.Body>
                                                                    <div>
                                                                        {data.content}
                                                                    </div>

                                                                    <div style={{ display: 'grid', placeItems: 'center' }}>
                                                                        {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/tarang/" + data.img)} />}
                                                                        <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                            {data.imgDesc}
                                                                        </div>
                                                                    </div>
                                                                </Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                )
                                            )
                                        }
                                        </Accordion>
                                    </Col>
                                    <Col lg="1"></Col>
                                </Row>
                            </div>
                        </FadeIn>
                        <Row className="subsystem-headings">
                            <h3>Software</h3>
                        </Row>
                        <FadeIn>
                            <div className="spec-container">
                                <Row>
                                    <Col lg="1"></Col>
                                    <Col lg="10" className="my-auto featureCol">
                                        {/* We have improved the software architecture to make the code modular making it easier to test, debug and integrate. In addition, we have made significant advancements in Simultaneous Localization and Mapping strategy (SLAM), tuning of the controller and vision algorithms. The software stack uses the Robot Operating System (ROS noetic) framework by Willow Garage, which works on Ubuntu 20.04 OS that acts as communication middleware between all the processes running on the robot. We have migrated our code from python 2 (which has been deprecated) to python 3. In addition to it, we have also updated the code for our previous vehicles to use the latest versions of the third-party libraries like OpenCV, YOLO and other ROS packages. */}
                                        We have enhanced the software architecture to adopt a more modular design, significantly improving testability, debugging, and integration. Notable advancements have been made in our Simultaneous Localization and Mapping (SLAM) strategy, as well as in the tuning of controllers and optimization of vision algorithms. The software stack is built on the Robot Operating System (ROS) framework, originally using ROS Noetic by Willow Garage. It operates on Ubuntu 22.04 and serves as the communication middleware between various processes running on the robot.
                                        <br />
                                        <div>Our entire codebase has now been successfully migrated from ROS1 to ROS2, allowing us to take advantage of ROS2’s improved performance, real-time capabilities, and better system architecture. Furthermore, we have updated the software for our previous vehicles to be compatible with the latest versions of essential third-party libraries, including OpenCV, YOLO, and other ROS packages.</div>
                                        <div style={{ marginBottom: '20px' }}></div>
                                        <Accordion defaultActiveKey="">
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey="2005">
                                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                    Software Architecture
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2005">
                                                    <Card.Body>
                                                        <div>
                                                            The software stack of Tarang consists of dedicated layers for hardware integration, controls, navigation, motion planning and acoustic localization. The software stack consists of the following layers:
                                                            <ol>
                                                                <li>
                                                                    <b>Master Layer:</b>  It controls and coordinates the actions of all other layers to perform the tasks autonomously. All the decision making and strategy gets coded in the master layer, which commands the nodes in the other layers to perform different functions. The master layer contains the task-specific code. The signals and instructions for completing all the tasks originate from the master layer.
                                                                </li>
                                                                <li>
                                                                    <b>Control Layer:</b> It contains the implementation of the cascaded PID controller the bot uses. The control layer calculates the thrust for each of the thrusters to manoeuvre the bot as desired. It also generates the trajectory and waypoints to perform the wanted task.
                                                                </li>
                                                                <li>
                                                                    <b>Navigation Layer:</b> It contains the code for the Simultaneous Localization and Mapping (SLAM) algorithm. It performs sensor fusion, estimates the bot's current position in the world, and generates the world's map based upon the filtered sensor information.
                                                                </li>
                                                                <li>
                                                                    <b>Vision Layer:</b>  It contains the code for all the image processing and vision-related tasks. The vision layer receives the feed directly from the cameras, performs computation on the received data for preprocessing, object detection or visual odometry and sends the processed output to other nodes which require it.
                                                                </li>
                                                                <li>
                                                                    <b>Hardware Layer:</b> It is responsible for integrating sensors with the software stack. It collects the sensors-specific plugins and utilities to receive information from the sensors and publishes it on topics for the other nodes to use.
                                                                </li>
                                                            </ol>
                                                        </div>
                                                        <br />
                                                        <div>
                                                            Advantages of such a software architecture are:
                                                            <ol>
                                                                <li>It makes the development easier as different layers can be developed independently and tested asynchronously.</li>
                                                                <li>It enables easy debugging and troubleshooting.</li>
                                                                <li>It ensures that the code is scalable and maintainable and provides a straightforward way to integrate external libraries and expand the codebase.</li>
                                                            </ol>
                                                        </div>
                                                        <div style={{ display: 'grid', placeItems: 'center' }}>
                                                            {<img className="w-100 accord-img" alt="spec-img" src={require("assets/img/tarang/Software_Architecture.png")} />}
                                                            <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                ATAL's Software Architecture
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey="2006">
                                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                    Image-Preprocessing
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2006">
                                                    <Card.Body>
                                                        <div><b>Undistortion</b></div>
                                                        <div>We preprocess the video feed by applying multiple filters before extracting any information from it. Since the images are used to estimate the location of various objects and the vehicle itself, the lengths represented in the images must be true. The camera distorts the features in the image changing their shape and length, so images are undistorted in the preprocessing pipeline. To undistort images, we need to have distortion coefficients of the camera. To obtain these, we need to calibrate the camera using images of known size and shape images. In our case, a checkerboard pattern distortion known beforehand was used to calculate these coefficients. </div>
                                                        <br />

                                                        <div><b>Relative Global Histogram Stretching</b></div>
                                                        <div>The Relative Global Histogram Stretching method aims to improve image quality by applying contrast correction and colour correction to the camera output. </div>
                                                        <br />

                                                        <div><b>Contrast Correction</b></div>
                                                        <div>The contrast correction pipeline applies colour equalization on the image's green-blue(G-B) channels, followed by relative global histogram stretching.</div>
                                                        <br />

                                                        <div><b>Bilateral Filter</b></div>
                                                        <div>A bilateral filter reduces the noise by using a non-linear smoothing filter to the image. The contrast-corrected image is then passed to the colour correction phase, which converts the image to CIE-Lab colour space and stretches L, a and b components followed by CIE-Lab to RGB conversion</div>

                                                        <div style={{ display: 'grid', placeItems: 'center' }}>
                                                            {<img className="w-75 accord-img" alt="spec-img" src={require("assets/img/tarang/processing_combined.png")} />}
                                                            <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                Image Before Preprocessing Vs Image After Preprocessing
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card className="card-plain spec-card">
                                                <Accordion.Toggle className="accord-head" as={Card.Header} eventKey="2007">
                                                    <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                    Control System
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2007">
                                                    <Card.Body>
                                                        <div>We have improved the control system in our new vehicle by performing <b>fine thruster calibrations</b> and implementing a <b>cascaded PID controller</b> for precise motion control. <b>Atal is fully actuated with eight thrusters</b>, providing <b>six degrees of freedom</b> to the vehicle. Each thruster is calibrated to map <b>thrust vs. PWM input pulse</b>, and these mappings are used to generate a <b>thruster allocation matrix</b> that distributes the output of the PID controller to the respective thrusters. </div>
                                                        <br />

                                                        <div>Since each thruster contributes thrust primarily in a specific degree of freedom, the system remains <b>highly decoupled</b>, allowing the vehicle to execute <b>aggressive manoeuvres</b>. The decoupled architecture, combined with <b>independent position and velocity controllers</b>, allows us to <b>tune each PID loop independently</b>, improving control accuracy and responsiveness. </div>
                                                        <br />

                                                        <div>We use a <b>cascaded PID controller</b> for improved motion tracking. It considers both <b>position and velocity errors</b> to compute thrust commands, enabling faster corrections while the velocity controller helps prevent overshoot. Given the vehicle’s <b>lightweight design</b>, it responds quickly but is also more prone to <b>oscillations and overshoot</b>—hence, the PID parameters are carefully tuned for <b>damping</b> and controlled response. </div>
                                                        <br />

                                                        <div>As a result, <b>Atal shows significantly better motion tracking</b> than our previous vehicle, Anahita, with <b>lower settling time, minimal overshoot</b>, and enhanced manoeuvrability. In addition to the current control architecture, we also plan to <b>experiment with Model Predictive Control (MPC)</b> and <b>fuzzy logic-based controllers</b> to explore more advanced and adaptive control strategies. </div>

                                                        <div style={{ display: 'grid', placeItems: 'center' }}>
                                                            {<img className="w-75 accord-img" alt="spec-img" src={require("assets/img/tarang/Control Layer.png")} />}
                                                            <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                Atal's Control Layer
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        {
                                            specs.software.map(
                                                (data) => (
                                                        <Card className="card-plain spec-card" key={data.title}>
                                                            <Accordion.Toggle className="accord-head" as={Card.Header} eventKey={String(data.id)}>
                                                                <svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>

                                                                {data.title}
                                                            </Accordion.Toggle>
                                                            <Accordion.Collapse eventKey={String(data.id)}>
                                                                <Card.Body>
                                                                    <div>
                                                                        {data.content}
                                                                    </div>

                                                                    <div style={{ display: 'grid', placeItems: 'center' }}>
                                                                        {data.img && <img className="w-75 accord-img" alt="spec-img" src={require("assets/img/tarang/" + data.img)} />}
                                                                        <div className="card-image-description" style={{ fontFamily: 'monospace', textAlign: 'center' }} >
                                                                            {data.imgDesc}
                                                                        </div>
                                                                    </div>
                                                                </Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                )
                                            )
                                        }
                                        </Accordion>
                                    </Col>
                                    <Col lg="1"></Col>
                                </Row>
                            </div>
                        </FadeIn>
                    </Container>
                </div>
            }
        </>
    );
}

export default Posts;
