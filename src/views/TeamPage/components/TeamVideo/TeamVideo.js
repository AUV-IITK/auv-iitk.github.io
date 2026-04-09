import React from "react";
import "./TeamVideo.css";
import {

  Container,

} from "reactstrap";

function TalkAbout() {
  return (
    <>
      <div className="section text-center">
        <Container>
          <h2 className="title heading-main mb-5">Team Video</h2>
          <div className="iframe-container">
            <iframe
              className="yt-video"
              src="https://www.youtube.com/embed/2kunTvZ_zLI"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

        </Container>
      </div>
    </>
  );
}
export default TalkAbout;
