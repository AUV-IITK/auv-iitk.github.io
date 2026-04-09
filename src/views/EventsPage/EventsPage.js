import React from 'react'
// reactstrap components
import { Container, Row } from 'reactstrap'
import ExamplesNavbar from '../../components/Navbars/ExamplesNavbar'

import robosubimg from '../../assets/img/Competetions/robosub.jpg'
import niotimg from '../../assets/img/Competetions/niot.jpg'
import sauvcimg from '../../assets/img/Competetions/sauvc.jpg'

import Event from './components/Event'

function LandingPage() {
  document.documentElement.classList.remove('nav-open')
  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.body.classList.add('profile-page')
    return function cleanup() {
      document.body.classList.remove('profile-page')
    }
  })

  const event1 = {
    name: 'ROBOSUB',
    link: 'https://robosub.org/',
    heading: 'Location',
    subheading: 'Woollett Aquatics Center, Irvine, California, USA',
    heading02: 'Our Participation',
    subheading08: 'Looking forward to participate in Robosub-2026',
    subheading02: 'Participated in Robosub-2021',
    // subheading02: '3rd position in Website, 4th and 6th in Skill Video and 16th position in TDR Report',
    subheading04: 'Participated in Robosub-2019',
    heading03: 'Laurels',
    subheading05: '3rd Position in Website category, RoboSub-2021',
    subheading06: '4th and 6th Position in Skills Video category, RoboSub-2021',
    subheading07: '16th Position in TDR category, RoboSub-2021',
    para1:
      'RoboSub is an international student competition. Student teams from around the world design and build robotic submarines, otherwise known as Autonomous Underwater Vehicles (AUV). The behaviors demonstrated by these experimental AUVs mimics those of real-world systems, currently deployed around the world for underwater exploration, seafloor mapping, and sonar localization, amongst many others.',
    para2: '',
    image: robosubimg
  }
  const event2 = {
    name: 'NIOT SAVe',
    link: 'http://www.indiamts.com/activities%20Report/6th_National_Competition_on_Student_Autonomous_underwater_Vehicle_SAVe_2019.pdf',
    heading: 'Location',
    subheading: 'Chennai, India',
    heading02: 'Our Participation',
    subheading02: 'Participated in NIOT SAVe 2019',
    subheading03: 'Participated in NIOT SAVe 2017',
    heading03: 'Laurels',
    subheading05: 'Runner-up NIOT SAVe 2019',
    subheading06: 'Runner-up NIOT SAVe 2019',
    para1:
      'ESSO-National Institute of Technology (NIOT) , under the Ministry of Earth Sciences,organizes the National Student Autonomous underwater Vehicle Competition for students pursuing engineering degree to visualize and design an autonomous underwater vehicle.The conceptual basis for Student Autonomous underwater Vehicle (SAVe), is a highly mobile Autonomous Underwater Vehicle (AUV) to be built based on engineering principles. The main focus of this competition is to involve students on the new frontier areas of ocean technology and kindle their innovative thinking in this unexplored area of ocean environment and observation.',
    para2: '',
    image: niotimg
  }
  const event3 = {
    name: 'SAUVC',
    link: 'https://sauvc.org/',
    heading: 'Location',
    subheading: 'Singapore, Asia',
    heading02: 'Our Participation',
    subheading02: 'Participated in SAUVC 2025',
    subheading03: '',
    subheading04: '',
    para1:
      "The SAUVC competition challenges participant teams to build an AUV which can perform given tasks. These tasks are simulations of tasks operational AUVs would have to be able to perform. The competition is held in a swimming pool and each team's AUV will have to perform 4 tasks. The speed and accuracy at which the AUV performs tasks will be used to decide the winner of the competition. The tasks involve four widely faced challenges underwater such as AUV navigation, visual identification, acoustic localization and robotic manipulation.",
    para2: '',
    image: sauvcimg
  }
  return (
    <div className="mobile-responsive">
      <ExamplesNavbar activePage="/events" />
      <div className="section text-center ">
        <Container className="reduce-margin">
          <Row>
            <h2 className="heading-main">AUV EVENTS & COMPETITIONS</h2>
          </Row>
        </Container>
      </div>
      <div className="main">
        <Event event={event1}> </Event>
        <Event event={event3}> </Event>
        <Event event={event2}> </Event>
      </div>
    </div>
  )
}

export default LandingPage
