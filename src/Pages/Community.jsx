import React from "react";
import { Container } from "react-bootstrap";
import user from "../assets/images/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg";
import { NavLink } from "react-router-dom";
import "../assets/css/community.css";
import Post from "../components/Post";
import cairotower from "../assets/images/image22.png";
import Ads from "../components/Ads";
import Events from "../components/Events";
const Community = () => {
  const EventData = [
    {
      id: 1,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
    {
      id: 2,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
    {
      id: 3,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
  ];
  return (
    <Container
      fluid
      className="m-0 p-0 community-container d-flex justify-content-center align-items-center flex-column"
    >
      <h2 className="community-h2 mt-5 ms-3 col-10">
        what are you thinking about <br /> mahmoud?
      </h2>
      <div className="mind col-10 mt-5">
        <div className="container">
          <img src={user} alt="" />
          <input
            type="text"
            id="text-input"
            placeholder="What Is In Your Mind"
          />
          <div className="icons-text">
            <div className="icon one">
              <i className="fa-regular fa-image"></i>
              <p>photo/video</p>
            </div>
            <div className="icon two">
              <i className="fa-solid fa-clapperboard"></i>
              <p>add reel</p>
            </div>
            <div className="icon three">
              <i className="fa-solid fa-user-tag"></i>
              <p>tag people</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-3 mb-4 w-100" style={{ background: "#fff" }}>
        <Post />
      </div>
      <Ads />
      <Events data={EventData} />
    </Container>
  );
};

export default Community;
