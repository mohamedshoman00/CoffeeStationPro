import React from "react";
import "../assets/css/profile.css";
import user from "../assets/images/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg";
import { NavLink, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div className="container">
          <div className="photo">
            <img src={user} alt="" />
            <div className="button">
              <button>Edit profile</button>
            </div>
          </div>
          <div className="text">
            <h3>
              mahmoud ali <i className="fa-solid fa-circle-check"></i>
            </h3>
            <div className="data">
              <i className="fa-solid fa-calendar"></i>
              <p>april 2020</p>
            </div>
            <div className="data">
              <i className="fa-solid fa-location-dot"></i>
              <p> ismalia </p>
            </div>
            <div className="data">
              <i className="fa-solid fa-envelope"></i>
              <p> mahmoudxali74@gmail.com </p>
            </div>
            <div className="data">
              <i className="fa-solid fa-phone"></i>
              <p> 01141578409 </p>
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
      <div className="mind">
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
