import React from "react";
import "../assets/css/event-details.css";
import user from "../assets/images/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg";
const EventDetails = () => {
  return (
    <div>
      <div className="background"></div>
      <div className="user-card">
        <div className="details-container">
          <div className="user">
            <img src={user} alt="" />
            <h4>usama_74</h4>
            <button>Follow</button>
          </div>
          <p className="title">
            <span className="first">cairo tower</span>
            <span className="second">sat, jan18 at 8pm</span>
          </p>
          <p className="under-user-name">zmalek, cairo</p>

          <p className="comment">
            <span>
              <i className="fa-solid fa-circle"></i>
            </span>
            Lorem ipsum dolor sit amet consectetur, adipisicing ept. Consectetur
            eos vero adipisci
          </p>
          <p className="comment">
            <span>
              <i className="fa-solid fa-circle"></i>
            </span>
            Lorem ipsum dolor sit amet consectetur, adipisicing ept. Consectetur
            eos vero adipisci
          </p>
          <p className="comment">
            <span>
              <i className="fa-solid fa-circle"></i>
            </span>
            Lorem ipsum dolor sit amet consectetur, adipisicing ept. Consectetur
            eos vero adipisci
          </p>
          <p className="comment">
            <span>
              <i className="fa-solid fa-circle"></i>
            </span>
            Lorem ipsum dolor sit amet consectetur, adipisicing ept. Consectetur
            eos vero adipisci
          </p>
        </div>
      </div>
    </div>
  );
};
export default EventDetails;
