import React from "react";
import cairotower from "../assets/images/image22.png";
import tower from "../assets/images/image23.png";
import sph from "../assets/images/image12.png";
import "../assets/css/events.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
const Events = ({ data }) => {
  const nav = useNavigate();
  const location = useLocation();
  return (
    <div className="events col-10 col-lg-10" id="events">
      <h2 className="main-title  gap-8 d-flex justify-content-between items-center col-12 col-lg-12 text-2xl md:text-4xl">
        events will coming soon
        {location.pathname === `/home` ? (
          <NavLink to="/all-events" className="view-all-btn w-40 h-16">
            View All
          </NavLink>
        ) : null}
      </h2>
      <div className="container">
        {data.map((ele, i) => (
          <div className="box" key={i}>
            <img decoding="async" src={ele.eventImage} alt="" />
            <div className="content">
              <h3>
                {ele.eventName} <span>{ele.eventDate}</span>
              </h3>
              <p>
                <span className="paragraph">{ele.eventPlace}</span>
                <span
                  className="button"
                  onClick={() => nav("/event-details", { replace: true })}
                >
                  Details
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
