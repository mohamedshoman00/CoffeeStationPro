import React, { useState } from "react";
import "../../assets/css/sidebar.css";
import userImg from "../../assets/images/Ellipse 7.png";
import { NavLink } from "react-router-dom";
import realIcon from "../../assets/images/real-icon.png";
import Notifications from "../Notifications";
import { useDispatch } from "react-redux";
import { LoginOrNotFun } from "../../redux/actions/appAction";
const Sidebar = ({ showNoti, setShowNoti }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="side-bar">
        <div className="prof">
          <img src={userImg} alt="" />
        </div>
        <div className="list">
          <ul>
            <li>
              <NavLink to="/search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setShowNoti(!showNoti)}>
                <i className="fa-solid fa-bell"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/home">
                <i className="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reels"
                style={{ position: "relative", marginTop: "18px" }}
              >
                <img
                  src={realIcon}
                  alt=""
                  style={{
                    position: "absolute",
                    width: "30px",
                    height: "30px",
                    top: "-12px",
                  }}
                />
                <i
                  className="fa-solid fa-play"
                  style={{ fontSize: "15px" }}
                ></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/community">
                <i className="fa-solid fa-users"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us">
                <i className="fa-solid fa-users"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">
                <i className="fa-solid fa-users"></i>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="end">
          <NavLink
            onClick={() => {
              // dispatch(LoginOrNotFun());
              sessionStorage.removeItem("loginOrNot");
            }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
