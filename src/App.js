import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/css/variables.css";
// pages
import Footer from "./components/Footers/Footer";

import LandingPage from "views/LandingPage/LandingPage";
import AboutUsPage from "views/AboutUsPage/AboutUsPage";
import TeamPage from "views/TeamPage/TeamPage";
import AnahitaPage from "views/Vehicles/AnahitaPage/AnahitaPage";
import VarunPage from "views/Vehicles/VarunPage/VarunPage";
import TarangPage from "views/Vehicles/TarangPage/TarangPage";
import EventsPage from "views/EventsPage/EventsPage";
import BlogsPage from "views/BlogsPage/BlogsPage";
import ContactUsPage from "views/ContactUsPage/ContactUsPage";
import SingleBlog from "views/SingleBlogs/SingleBlog";
import Mechanical from "views/MembersPage/Mechanical";
import Software from "views/MembersPage/Software";
import Electrical from "views/MembersPage/Electrical";
import Business from "views/MembersPage/Business";

const App = () => {  
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route
            path="/landing-page"
            render={(props) => <LandingPage {...props} active="true" />}
          />
          <Route
            path="/about-us"
            render={(props) => <AboutUsPage {...props} />}
          />
          <Route path="/team" render={(props) => <TeamPage {...props} />} />
          <Route
            path="/vehicles/anahita"
            render={(props) => <AnahitaPage {...props} />}
          />
          <Route
            path="/vehicles/varun"
            render={(props) => <VarunPage {...props} />}
          />
          <Route
            path="/vehicles/tarang"
            render={(props) => <TarangPage {...props} />}
          />
          <Route path="/events" render={(props) => <EventsPage {...props} />} />

          <Route
            path="/blogs/:id"
            render={(props) => <SingleBlog {...props} />}
          />
          <Route path="/blogs" render={(props) => <BlogsPage {...props} />} />

          <Route
            path="/contact-us"
            render={(props) => <ContactUsPage {...props} />}
          />
          <Route path="/mechanical" render={()=> <Mechanical/> } />
          <Route path="/electrical" render={()=> <Electrical/> } />
          <Route path="/software" render={()=> <Software/> } />
          <Route path="/business" render={()=> <Business/> } />
          <Redirect to="/landing-page" />
        </Switch>

        <Footer />
      </HashRouter>
    </div>
  );
};
export default App;
