import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HomeBackground from "../assets/images/image13.png";
import HomeNavbar from "./Navbar/HomeNavbar";
import Sidebar from "./Sidebar/Sidebar";
import handCheck from "../assets/images/Vector1.png";
import { NavLink } from "react-router-dom";
import cardBg from "../assets/images/Rectangle4878.png";
import Notifications from "./Notifications";
const MainHome = () => {
  const [showNoti, setShowNoti] = useState(false);
  return (
    <Container
      fluid
      className="p-0 w-100 home-page"
      style={{
        // height: "100vh",
        backgroundImage: `url(${HomeBackground})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="overlay"></div>
      <div className="second-overlay"></div>
      {showNoti && <Notifications />}
      <HomeNavbar />
      <Sidebar showNoti={showNoti} setShowNoti={setShowNoti} />
      <div className="home" style={{ height: "100%" }}>
        <div
          className="side1 d-flex gap-3"
          style={{ marginLeft: `220px`, marginTop: `-25px` }}
        >
          <div className="card1">
            <div>
              <h2>
                <span>Hi</span> Mahmoud
              </h2>
              <img src={handCheck} alt="" />
            </div>
            <p className="card1-p">
              "<span>Welcome to our website</span>, where Egypt comes alive
              <br />
              Explore the beauty of our country, rich in history and thrive
              <br />
              Discover hidden gems
            </p>
          </div>
          <div className="card2">
            <div>
              <h2>Fantastic cafes</h2>
            </div>
            <p className="card2-p">
              The Social Grind is a cafe that aims to provide a warm and
              welcoming environment for people to socialize, work, and relax.
              The cafe features comfortable seating, a relaxed atmosphere, and
              high-quality coffee and food.
            </p>
            <div className="card2-btn">
              <NavLink to="/cafe-details">let’s go</NavLink>
            </div>
          </div>
        </div>
        <div
          className="side2 d-flex"
          style={{ marginLeft: `220px`, marginTop: `-50px` }}
        >
          <div className="card3">
            <h3>
              Find The <br /> Best <span>cafe</span> <br /> and
              <span> restaurants</span> now
            </h3>
          </div>
          <div
            className="card5"
            style={{
              backgroundImage: `url(${cardBg})`,
              backgroundSize: "cover",
            }}
          >
            <NavLink className="card5-btn">
              <p>frio cafe</p>
              <i className="fa-solid fa-right-long"></i>
            </NavLink>
          </div>
        </div>

        <div className="card4">
          <h4>One percentage cafe</h4>
          <p>
            The cafe has a cozy and inviting atmosphere with warm lighting,
            comfortable seating, and a mix of communal and individual tables.
            There are also several cozy corners with comfortable chairs and
            sofas,
          </p>
          <NavLink className="card4-btn">
            <i className="fa-solid fa-right-long"></i>
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default MainHome;
