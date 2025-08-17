import React from "react";
import "../assets/css/profile.css";
import user from "../assets/images/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg";
import { NavLink, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div className="container flex flex-col items-start justify-between md:flex-row md:justify-start gap-4">
          <div className="photo mb-6">
            <img src={user} alt="" className="w-[200px] h-[200px] md:w-[200px] md:h-[200px]" />
            <div className="button">
              <button className="w-[200px] md:w-[200px] text-xl">Edit profile</button>
            </div>
          </div>
          <div className="text flex flex-col gap-5">
            <h3>
              mahmoud <i className="fa-solid fa-circle-check"></i>
            </h3>
            <div className="data flex ">
              <i className="fa-solid fa-calendar"></i>
              <p className="m-0">april 2020</p>
            </div>
            <div className="data">
              <i className="fa-solid fa-location-dot"></i>
              <p className="m-0"> Ismalia </p>
            </div>
            <div className="data">
              <i className="fa-solid fa-envelope"></i>
              <p className="m-0"> mahmoudx456@gmail.com </p>
            </div>
            <div className="data">
              <i className="fa-solid fa-phone"></i>
              <p className="m-0"> 01141578409 </p>
            </div>
          </div>
        </div>

        <div className="social">
          <div className="container">
            <ul className="d-flex gap-5">
              <li>
                <NavLink to="/profile/posts">Posts</NavLink>
              </li>
              <li>
                <NavLink to="/profile/photos">Photos</NavLink>
              </li>
              <li>
                <NavLink to="/profile/reels">Reels</NavLink>
              </li>
              <li>
                <NavLink to="/profile/reviews">Reviews</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mind hidden md:flex">
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
      <Container
        fluid
        className="w-100 pt-5 mb-5"
        style={{ background: "#fff" }}
      >
        <Outlet />
      </Container>
    </div>
  );
};
export default Profile;
