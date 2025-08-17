import React, { useState,useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../assets/css/navbar.css";
import userImg from "../../assets/images/Ellipse 7.png";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const HomeNavbar = () => {
  const nav = useNavigate();
  const loc = useLocation();
const [toggle, settoggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
settoggle(false)
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar
      className="relative navbar align-items-start"
      style={{
        background:
          loc.pathname === `/home` || loc.pathname === `/sign-up`
            ? `none`
            : // : loc.pathname === `/sign-up`
              // ? `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.901042) 0.06%, rgba(0, 0, 0, 0.305071) 525.4%, rgba(0, 0, 0, 0) 557.33%)`
              `linear-gradient(180deg, #000000 0%, #041028 0.06%, rgba(0, 0, 0, 0.305071) 525.4%, rgba(0, 0, 0, 0) 557.33%)`,
      }}>
      {/* {loc.pathname === `/sign-up` && <div className="overlay"></div>} */}
      <Container
        fluid
        className="p-0 home-container align-items-center"
        style={{
          margin: loc.pathname === `/sign-up` ? "0 12vw" : "0 7vw 0 12vw",
        }}>
        <div className="hidden nav-1 lg:flex">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/reels">Reels</NavLink>
          <NavLink to="/community">Community</NavLink>
        </div>
        <div className="head cursor-pointer" onClick={() => nav("../home")}>
          <h1 >
            <span>O</span>ut<span>l</span>y
          </h1>
        </div>
        <div className="hidden nav-2 lg:flex">
          <NavLink to="/about-us">About us</NavLink>
          <NavLink to="/contact-us">Contact us</NavLink>
          <div className="items-center justify-center hidden lg:flex search-icon" onClick={() => nav("../search")}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        {loc.pathname !== `/sign-up` && (
          <div className="hidden user-info lg:flex" onClick={() => nav("../profile")}>
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
          className="hidden foot lg:block"
          style={{
            width: loc.pathname === `/sign-up` ? "85.5%" : "67.5%",
          }}></div>
            <div
          className="block foot1 lg:hidden"
          style={{
            marginLeft:'-16vw',
            width:'120%',
          }}></div>
        <div className="block lg:hidden"> 
            {toggle ? <FaTimes  className="text-4xl text-[#fd5b1f] cursor-pointer" onClick={()=> settoggle(prev=> !prev)}/>:<FaBars className="text-4xl text-[#fd5b1f] cursor-pointer" onClick={()=> settoggle(prev=> !prev)}/>}
        {toggle&& <ul className="fixed w-full toggled-menu " style={{zIndex:1000}}>
          <li className="text-center p-2 text-xl"> <NavLink to="/home" onClick={()=> settoggle(false)}> Home</NavLink></li>
          <li className="text-center p-2 text-xl"> <NavLink to="/reels" onClick={()=> settoggle(false)}>Reels</NavLink></li>
          <li className="text-center p-2 text-xl"> <NavLink to="/community" onClick={()=> settoggle(false)}>Community</NavLink></li>
          <li className="text-center p-2 text-xl"> <NavLink to="/about-us" onClick={()=> settoggle(false)}>About us</NavLink></li>
          <li className="text-center p-2 text-xl"> <NavLink to="/contact-us" onClick={()=> settoggle(false)}>Contact us</NavLink></li>
          <li className="text-center p-2 text-xl"> <NavLink to="/profile" onClick={()=> settoggle(false)}>Profile</NavLink></li>
         
        </ul>}
        </div>

      </Container>
    </Navbar>
  );
};

export default HomeNavbar;
