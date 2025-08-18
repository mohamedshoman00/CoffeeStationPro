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
      className="p-0 w-100 home-page h-dvh overflow-hidden"
      style={{
        // height: "100vh",
        backgroundImage: `url(${HomeBackground})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        position: "relative",
      }}>
      <div className="overlay"></div>
      <div className="second-overlay"></div>
      {showNoti && <Notifications />}
      <HomeNavbar />
      {/* <Sidebar showNoti={showNoti} setShowNoti={setShowNoti} /> */}
      <div className="flex flex-col lg:pl-40 gap-y-4  md:gap-0 home" style={{ height: "100%" }}>
        <div
          className="gap-3 mx-6  mt-0 md:mt-6 side1 d-flex md:gap-8 lg:gap-52"
          >
          <div className="w-full card1 md:w-1/2 lg:w-1/3">
            <div className="gap-5 justify-evenly md:justify-start">
              <h2 className="text-5xl md:text-5xl">
                <span>Hi</span> Mahmoud
              </h2>
              <img src={handCheck} alt="" />
            </div>
            <p className="w-full text-lg card1-p lg:text-2xl">
              <span>Welcome to our website</span> — experience the beauty, history, and hidden gems of Egypt
            </p>
          </div>
          <div className="hidden card2 md:block ">
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
          className="flex flex-col w-full px-6 pt-6 side2 md:flex-row md:justify-start "
         >
          <div className="w-fit card3 md:w-1/2">
            <h3 className="text-[36px] md:text-4xl lg:text-6xl">
              Explore the best <br /><span>cafés</span> & <span>restaurants</span><br/>today
            </h3>
          </div>
          <div
            className="w-full mt-5  card5 md:w-1/2 lg:w-1/3  md:h-[250px] lg:h-[230px]"
            style={{
              backgroundImage: `url(${cardBg})`,
              backgroundSize: "cover",
            }}>
            <NavLink className="card5-btn">
              <p>frio cafe</p>
              <i className="fa-solid fa-right-long"></i>
            </NavLink>
          </div>
        </div>

        {/* <div className="card4">
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
        </div> */}
      </div>
    </Container>
  );
};

export default MainHome;
