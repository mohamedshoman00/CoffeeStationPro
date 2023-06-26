import React from "react";
import "../assets/css/photos.css";
import user from "../assets/images/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg";
import { NavLink } from "react-router-dom";

const Photos = () => {
  return (
    <div>
      {/* <div className="profile">
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
            <NavLink to="" className="element active">
              Posts
            </NavLink>
            <NavLink to="" className="element">
              Photo
            </NavLink>
            <NavLink to="" className="element">
              Reels
            </NavLink>
            <NavLink to="" className="element">
              Reviews
            </NavLink>
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
      </div> */}

      {/* Start Gallery  */}
      <div className="gallery" id="gallery">
        <div className="container">
          <div className="box">
            <div className="image">
              <img decoding="async" src={user} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={user} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={user} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={user} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={user} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img decoding="async" src={user} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*  End Gallery */}
    </div>
  );
};
export default Photos;
