import React from "react";
import ExamplesNavbar from "../../../components/Navbars/ExamplesNavbar";

// core components
import KeyFeatures from "./components/KeyFeatures/KeyFeatures";
import SubsystemSpecs from "./components/SubsystemSpecs/SubsystemSpecs";

function LandingPage() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });
    return (
        <div className="mobile-responsive">
            <ExamplesNavbar activePage="/vehicles/triton"/>
            <div className="main">
                <KeyFeatures/>
                <SubsystemSpecs/>
            </div>
        </div>
    );
}   

export default LandingPage;
