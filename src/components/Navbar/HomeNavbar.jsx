import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../assets/css/navbar.css";
import userImg from "../../assets/images/Ellipse 7.png";

const HomeNavbar = () => {
  const nav = useNavigate();
  const loc = useLocation();

  return (
    <Navbar
      className="navbar align-items-start"
      style={{
        background:
          loc.pathname === `/home` || loc.pathname === `/sign-up`
            ? `none`
            : // : loc.pathname === `/sign-up`
              // ? `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.901042) 0.06%, rgba(0, 0, 0, 0.305071) 525.4%, rgba(0, 0, 0, 0) 557.33%)`
              `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.901042) 0.06%, rgba(0, 0, 0, 0.305071) 525.4%, rgba(0, 0, 0, 0) 557.33%)`,
      }}>
      {/* {loc.pathname === `/sign-up` && <div className="overlay"></div>} */}
      <Container
        fluid
        className="p-0 home-container align-items-center"
        style={{
          margin: loc.pathname === `/sign-up` ? "0 12vw" : "0 7vw 0 12vw",
        }}>
        <div className="nav-1">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/reels">Reels</NavLink>
          <NavLink to="/community">Community</NavLink>
        </div>
        <div className="head">
          <h1>
            <span>O</span>ut<span>l</span>y
          </h1>
        </div>
        <div className="nav-2">
          <NavLink to="/about-us">About us</NavLink>
          <NavLink to="/contact-us">contact us</NavLink>
          <div className="search-icon" onClick={() => nav("../search")}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        {loc.pathname !== `/sign-up` && (
          <div className="user-info" onClick={() => nav("../profile")}>
            <div className="user">
              <img src={userImg} alt="" />
              <div className="text">
                <p>Welcome,</p>
                <h6>Mahmoud</h6>
              </div>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
        )}

        <div
          className="foot"
          style={{
            width: loc.pathname === `/sign-up` ? "85.5%" : "67.5%",
          }}></div>
      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
