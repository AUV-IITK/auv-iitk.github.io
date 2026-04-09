const data = {
    "brief" : "Atal is our third-generation Autonomous Underwater Vehicle (AUV), designed with cutting-edge advancements for robust underwater operations. It features a lightweight yet durable central hull constructed from aluminum, ensuring both structural integrity and complete water resistance under pressure. It is equipped with sensors—including an Inertial Measurement Unit (IMU), Doppler Velocity Log (DVL), and high-resolution cameras. Atal is capable of executing a wide range of complex tasks such as precision torpedo deployment, object pickup and drop, real-time localization in unfamiliar underwater environments, and complex space-constrained manoeuvres. Atal is equipped with a high-capacity battery system and integrated with advanced safety protocols. Atal is set to participate in RoboSub 2026.",

    "specsTable" : [
        {
            "name": "Weight (in air)",
            "spec": "60 kgs"
        },
        {
            "name": "Propulsions",
            "spec": "T200 thrusters (from Blue Robotics)"
        },
        {
            "name": "Power",
            "spec": "14.8 V 18Ah batteries from Blue Robotics"
        },
        {
            "name": "Camera",
            // "spec": "2 IDS UI-5269SE Rev. 4 Cameras"
            "spec": "2 IDS UI-5269SE Rev. 4 Cameras and a Hero 12 GoPro Camera"
        },
        {
            "name": "Main Computer",
            "spec": "Intel i7 NUC"
        },
        {
            "name": "Software Stack",
            // "spec": " ROS Noetic-Ubuntu 20.04-Gazebo 11"
            "spec": " ROS Noetic-Ubuntu 22.04-Gazebo 11"
        },
        {
            "name": "Degrees of Freedom",
            "spec": "6"
        },
        {
            "name": "Operation Time",
            // "spec": "4 hours"
            "spec": "8 hours"
        }
    ],
    "mechanical": [
        // {
        //     "id": 1,
        //     "title": "Main Hull",
        //     "content": "A major improvement over our previous AUV's is the design of a single main hull. The vehicle hull is made of carbon fibre, making it easier to mold into the desired shape and reducing weight. The weight reduction is advantageous as it significantly minimizes the thrust to move or stop the bot. In addition, a single hull allows us to increase the simplicity of design to a large extent, reducing the need for penetrators in and out of individual hulls and improving accessibility. The penetrators were often the primary cause for most of the leakages in our previous bot, and it was challenging for us to find and fix leaks. A single hull allows us to check for leakages using a single test without being in the pool. We have installed a pressure sensor in the main hull, which assists in leak detection. We lower the pressure inside the hull slightly once all the components are fitted in it. If the pressure sensor reading increases with time, i.e. air can enter due to some leaks in the hull, we will know about the leakages even before putting the vehicle in water.",
        //     "img": "hull_final.png",
        //     "imgDesc": "A view of Atal's hull design."
        // },
        // {
        //     "id": 1,
        //     "title": "Propulsion System",
        //     "content": "We are using 6 T200 Thrusters from Blue Robotics in our vehicle. A reduction in weight and thrust requirements due to a light carbon fiber hull has enabled us to reduce the number of thrusters from 8 to 6. It reduced the cost and maintenance required for the propellers. We performed vehicle motion simulations in a simulation environment in gazebo and ensured no excess load (RPM) is put on thrusters due to their lower number, even at comparable speeds as the last vehicle. We also verified that all 6 degrees of freedom are achievable by clever use of thrusters. The reduction in the number of thrusters simplified the vehicle dynamics and made thruster allocation simpler.",
        //     "img": "thruster placement2.JPG",
        //     "imgDesc": "Thruster Placement in Tarang"
        // },
        {
            "id": 1,
            "title": "Propulsion System",
            "content": "We have integrated 8 T200 Thrusters from Blue Robotics into our AUV to deliver exceptional maneuverability and control. The decision to use eight thrusters was driven by the increased structural weight due to the transition from acrylic to a more robust aluminum hull, ensuring that performance remains uncompromised. Through extensive simulation in Gazebo, we rigorously modeled and tested the vehicle’s dynamic behavior under a wide range of conditions. These simulations allowed us to meticulously fine-tune thruster configurations and validate that no individual thruster is subjected to excessive RPM, even when achieving speeds comparable to our previous design. The configuration of eight thrusters not only supports full 6 degrees of freedom (6-DOF) motion, but also significantly simplifies vehicle dynamics and thruster allocation, allowing for more responsive and stable operation in complex underwater tasks.",
            "img": "atal_thruster.png",
            "imgDesc": "Thruster Placement in Atal"
        },
        {
            "id":2,
            "title": "Heat Dissipation Mechanism",
            "content": "The main hull is made using aluminium directly in contact with water when the bot is operating. The water acts as a natural coolant and helps in the dissipation of heat. Aluminium, being a good conductor of heat, aids in effectively transferring the heat generated by the electronic components to the surroundings and prevents damage due to overheating.",
            "img": "",
            "imgDesc": ""
        },
        {
            "id":3,
            "title": "Marker Dropper",
            "content": "We've redesigned the marker dropper to overcome issues in the previous version, such as tight manufacturing tolerances, difficult reloading, and mounting challenges. The new mechanism is simpler, more reliable, and easier to integrate. It will have two markers (golf balls) hydrodynamically designed to fall straight down once they are released. The marker dropper is located near the camera to minimize the errors due to frame transformations. A servo-controlled star-shaped obstructor prevents the markers from dropping until triggered, at which point it rotates to release them.",
            "img": "md working2.PNG",
            "imgDesc": "Marker Dropper Mechanism"
        },
        {
            "id":4,
            "title": "Grabber",
            "content": "We have developed a singly actuated grabber powered by a servo motor, featuring a clean and efficient design. Its simplicity ensures ease of manufacturing with high precision and repeatability. The grabber is equipped with four robust claws, optimized to securely grasp and manipulate objects with high efficiency, making it well-suited for a variety of underwater tasks.",
            "img": "grabber_combined.png",
            "imgDesc": "Working of grabber"
        },
        {
            "id":5,
            "title": "Spring-Loaded Torpedo Deployment System",
            "content": "The pneumatic system used in Tarang is a self-designed component capable of shooting torpedoes with accuracy. The assembly uses two IP 68 rated solenoid valves (one for each torpedo). Because the solenoid valve is waterproof, we can install the whole torpedo assembly as a single unit outside the vehicle and mount it at the base, thus removing the need for unnecessary air tubing and increasing space inside the hull for other components.",
            "img": "torpedo compartments.PNG",
            "imgDesc": "The Torpedo Compartments"
        },
        {
            "id":6,
            "title": "Simulation and Testing",
            "content": "The vehicle was tested using various simulation software to get flow visualization and stress analysis. The simulations very performed in ANSYS to find the stress and pressure profile of the vehicle. Topological optimization was used by removing non-essential weight (area containing less stress) for DVL mount. The marker dropper, torpedo and grabber were simulated in Solidworks’ motion study.",
             "img": "CFD.jpeg",
            "imgDesc": "Simulation in ANSYS"    
        }

    ],
    "electrical": [
        // {
        //     "id":1,
        //     "title": "Kill Switch and Safety Mechanisms",
        //     "content": "The power management board in the vehicle takes care of the undervoltage and overcurrent faults. We have used a hall effect current sensor(ACS-712) to measure the current flowing through each battery and a simple resistive voltage divider for battery voltage measurement. The Kill Switch mechanism has also been upgraded using a PMOS while toggling the gate voltage through the reed switch. It also provides a penetrator/connector free interface for the Kill switch, ensuring better waterproofing.The internal pressure sensor(BMP388) in the vehicle is used to test for leakage before the vehicle is deployed underwater by measuring whether the hull sustains the applied relative drop in pressure. In addition, temperature reading (provided by the same BMP388) can be used for safely shutting down the ICs if they don't have default thermal shutdown.",
        //     "img": "",
        //     "imgDesc": ""
        // },
        // {
        //     "id":2,
        //     "title": "Sensor Integration",
        //     "content": "Integration of industrial sensors and interfacing directly with onboard computers enables robust and real-time state estimation. This year, we have upgraded to the iDS ueye industrial cameras for better colour quality and enhanced focus. Through the help of a newly introduced network switch, the camera feed can now directly be transferred to GPU for object detection and recognition. The external LAN now and the onboard computer also have direct control over cameras and GPU. The new microcontroller board is designed to significantly reduce its size (using only necessary GPIO pins) and organizes connectors for the actuator and manipulator and several other peripherals.",
        //     "img": "esc_render.png",
        //     "imgDesc": "ESC Board"
        // },
        // {
        //     "id":3,
        //     "title": "Onboard Computer",
        //     "content": "The onboard computer is powered by an Intel Core i7 processor and is powerful enough for real-time image processing, object detection and all other computing. It acts as the primary interface between all the sensors and actuators directly or via some other micro-controller. The new camera is now interfaced via Ethernet, which earlier was done using USB.",
        //     "img": "",
        //     "imgDesc": ""
        // },
        {   "id":4,
            "title": "Actuators and Manipulators",
            "content": "The servo-actuated marker dropper and the solenoid valve-controlled torpedoes are all driven through the main micro-controller connected to the CPU via USB. The new ESC breakout board is built out on 2 layer PCB with traces exposed to air allowing more current tolerance. The signal to ESCs for driving thrusters is also provided by the main micro-controller.",
            "img": "",
            "imgDesc": ""
        },
        {   "id":5,
            "title": "Connectors",
            "content": "The new Molex micro-fit connectors series with 3 configurations (board-board, wire-wire, wire-board) are used on all the new boards for more placement flexibility, making the boards modular.",
            "img": "molex-micro-fit-connector.jpg",
            "imgDesc": "Molex micro-fit connectors"
        }
    ],
    "software": [
        // {
        //     "id":1,
        //     "title": "Control System",
        //     "content": "We have improved the control system in our new vehicle by performing fine thruster calibrations and using a cascaded PID controller for precise movements. Atal is fully actuated with eight thrusters providing six degrees of freedom to the vehicle. Each thruster is calibrated to map the thrust vs PWM input pulse, and these mappings are used to generate a thruster allocation matrix to distribute the thrusts generated by the PID controller to the thrusters. Since each thruster provides thrust only in a particular degree of freedom, it gives a highly decoupled system that allows the vehicle to perform aggressive manoeuvres. Furthermore, decoupled thrusters with the independent position and velocity controller provide a way to tune the position and orientation controller independently. Hence we can tune the PID systems easily. We have implemented a cascaded PID controller for better motion tracking, which considers the error in velocity as well as the error in position to calculate thrusts. It allows a faster compensation with the velocity controller providing a mechanism to prevent overshoot. Since the vehicle's weight is less, it can provide faster response, but it is also prone to large overshoots and oscillations, so parameters are tuned to provide damping and slow down the response. As a result, the motion tracking of Atal is better than our last vehicle Anahita in terms of lower settling time, almost zero overshoot and ability to perform aggressive manoeuvres.",
        //     "img": "Control Layer.png",
        //     "imgDesc": "Atal's Control Layer"
        // },
        {   "id":2,
            "title": "Navigation",
            "content": "We have set a sensor fusion pipeline to combine the readings from different sensors and better assess the measurement using the Kalman Filtering algorithm. The usage of sensor fusion enabled us to compensate for the errors in IMU reading due to magnetic interference and position offset. This year we have added an implementation of the SLAM algorithm known as FastSLAM for navigation. Fast SLAM provides a factored and more efficient way to solve the SLAM problem and provides a way to solve it with a complexity that scales logarithmically with the number of landmarks observed. The navigation layer publishes a world map estimate using a 2.5-dimensional occupancy grid. The occupancy grid stores the estimates of the current state of the robot, global locations of the landmarks and previously traversed locations on the map. The global map helps us in planning and changing our strategy dynamically.",
            "img": "Navigation Layer (4).png",
            "imgDesc": "Atal's Navigation Layer"
        },
        {   "id":3,
            "title": "YoloV11",
            "content": "For detecting various objects like buoys, gates during the tasks, we are using the YOLOv11 object detection algorithm in contrast to classical computer vision algorithms used in our last vehicle Anahita. YOLOv11 provides better results than classical algorithms as it generates the bounding box in a single pass of the input image as compared to multiple passes in classical methods. To train the YOLOv11 network, we generated rosbags of camera feed by running the vehicle in simulator and recording the camera output and then augmented (rotation, scaling, color variation, occlusion) the frames obtained from these rosbags to generate an extensive dataset.",
            "img": "yolov11.jpg",
            "imgDesc": "YoloV11 in action"
        },
        {   "id":4,
            "title": "Mission Planner",
            "content": "The mission planner contains the strategy to perform all the other tasks. The master layer has the mission planner node, which gives all the different lower layers instructions to accomplish the tasks as per the defined strategy using service-client calls. The mission planner switches on the vision layer to detect the target and switches on the desired task node to execute a task. The task node can also perform the motions such as surge, sway, heave or yaw independently, enabling the vehicle to go from one location to another. A combination of these movements, which can be set in the master layer by the user, achieves the desired motion. The master layer also contains the switches for all the basic motions, the competition's main tasks, and the vision layer. Such a switch system gives easy control over vehicles motion and enables making changes in mission planner effortlessly.",
            "img": "",
            "imgDesc": ""
        },
        {   "id":5,
            "title": "Gazebo Simulation",
            "content": "Extensive testing was performed in the gazebo using the simulated robot model of our vehicle. The open-source simulation tool UUV-simulator was used to simulate an underwater environment. We tested the ability of the vehicle to perform tasks. A simulated gazebo world was made using exact models of the props used in competitions, and the tasks were performed autonomously in that simulation. We used the plugins from the UUV-simulator library to simulate the physics of the world. The vehicle performed the gate task, path follower task, buoy task, marker dropper task, and octagon task successfully. The controller was tested in the simulation and fine-tuned the parameters. As a result, the maximum overshoot was limited to less than 5 percent and achieved a settling time of 10 seconds and negligible steady-state error for a unit step signal.",
            "img": "Gazebo Simulation.png",
            "imgDesc": "Simulation in Gazebo"
        }
    ]
}
export default data;
