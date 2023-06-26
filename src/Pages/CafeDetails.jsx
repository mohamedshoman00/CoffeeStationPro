import React, { useState } from "react";
import { Container } from "react-bootstrap";
import cafe from "../assets/images/friocafe.png";
import "../assets/css/cafe-details.css";
import { NavLink, Outlet } from "react-router-dom";
const CafeDetails = () => {
  const [followBtn, setFollowBtn] = useState(false);
  return (
    <>
      <Container fluid className="p-0 m-0 pb-5 cafe-details">
        <div className="profile ">
          <div className="container">
            <div className="photo">
              <img src={cafe} alt="" />
            </div>
            <div className="text mt-4">
              <h3 className="mb-3">
                frio cafe
                <button
                  className="cafe-det-btn ms-4"
                  onClick={() => setFollowBtn(!followBtn)}
                  style={{
                    backgroundColor: followBtn ? `#FD5B1F` : `#fff`,
                    color: followBtn ? `#fff` : `#214E8A`,
                  }}
                >
                  {followBtn ? `Following` : `Follow`}
                </button>
              </h3>
              <div className="follow d-flex align-items-center gap-4 mb-3">
                {/* <NavLink>
                10k <span className="me-2"> </span> Followers
              </NavLink>
              <NavLink>
                100 <span className="me-2"> </span> Following
              </NavLink> */}
              </div>
              <div>
                <p className="follow-para" style={{ textAlign: "start" }}>
                  Don’t tell anyone, but <br /> I’m mahmoud ali
                </p>
              </div>
            </div>
          </div>

          <div className="social">
            <div className="container d-flex">
              <ul className="d-flex gap-5 col-8">
                <li>
                  <NavLink to="/cafe-details/directions">Directions</NavLink>
                </li>
                <li>
                  <NavLink to="/cafe-details/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/cafe-details/reels">Reels</NavLink>
                </li>
                <li>
                  <NavLink to="/cafe-details/reviews">Reviews</NavLink>
                </li>
              </ul>
              <div className="rate">
                <i className="filled fas fa-star"></i>
                <i className="filled fas fa-star"></i>
                <i className="filled fas fa-star"></i>
                <i className="filled fas fa-star"></i>
                <i className="far fa-star"></i>
                <span>4.5</span>
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
      </Container>
    </>
  );
};

export default CafeDetails;
