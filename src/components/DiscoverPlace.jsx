import React from "react";
import museum from "../assets/images/meuseum.jpeg";
import tolip from "../assets/images/to.jpeg";
import elsala from "../assets/images/el.jpeg";
import darb from "../assets/images/darb.jpeg";
import mercure from "../assets/images/mer.jpeg";
import "../assets/css/discover-place.css";
import { NavLink } from "react-router-dom";
const DiscoverPlace = ({ data }) => {
  return (
    <div className="discover col-10 col-lg-10" id="discover">
      <h2 className="main-title col-12 col-lg-12">
        Discover places in ismalia city
      </h2>
      <div className="container">
        {data.map((ele, i) => (
          <div className="box" key={i}>
            <img decoding="async" src={ele.placeImage} alt="" />
            <div className="content">
              <h3>
                <span className="first">{ele.placeFirstName} </span>
                <span className="second">{ele.placeLastName}</span>
              </h3>
              {ele.description && <p>{ele.description}</p>}
              {!ele.description && (
                <p style={{ marginBottom: "0" }}>{ele.placeCount}</p>
              )}
            </div>
            {ele.pageInfo && (
              <div className="info">
                <NavLink to="#">Go to Page</NavLink>
                <i className="fas fa-long-arrow-alt-right"></i>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverPlace;

// <div className="box">
//   <img decoding="async" src={tolip} alt="" />
//   <div className="content">
//     <h3>
//       <span className="first">Tolip</span>{" "}
//       <span className="second"> EL Forsan</span>
//     </h3>
//     <p>
//       Tolip El Forsan Hotel fitness olip El Forsan Hotel fitness olip El
//       Forsan Hotel fitnessolip El Forsan Hotel fitness El Forsan Hotel
//       fitness..
//     </p>
//   </div>

//   <div className="info">
//     <a href="#">Go To Page</a>
//     <i className="fas fa-long-arrow-alt-right"></i>
//   </div>
// </div>
// <div className="box">
//   <img decoding="async" src={elsala} alt="" />
//   <div className="content">
//     <h3>
//       <span className="first">El Sala</span>{" "}
//       <span className="second"> Ala ElNaby</span>
//     </h3>
//     <p>
//       Tolip El Forsan Hotel fitness olip El Forsan Hotel fitness olip El
//       Forsan Hotel fitnessolip El Forsan Hotel fitness El Forsan Hotel
//       fitness..{" "}
//     </p>
//   </div>

//   <div className="info">
//     <a href="#">Go To Page</a>
//     <i className="fas fa-long-arrow-alt-right"></i>
//   </div>
// </div>
// <div className="box">
//   <img decoding="async" src={mercure} alt="" />
//   <div className="content">
//     <h3>
//       <span className="first">Mercure</span>{" "}
//       <span className="second"> Ismailia</span>
//     </h3>
//     <p>
//       Tolip El Forsan Hotel fitness olip El Forsan Hotel fitness olip El
//       Forsan Hotel fitnessolip El Forsan Hotel fitness El Forsan Hotel
//       fitness..{" "}
//     </p>
//   </div>

//   <div className="info">
//     <a href="#">Go To Page</a>
//     <i className="fas fa-long-arrow-alt-right"></i>
//   </div>
// </div>
// <div className="box">
//   <img decoding="async" src={darb} alt="" />
//   <div className="content">
//     <h3>
//       <span className="first">Darb </span>{" "}
//       <span className="second"> Shakamba</span>
//     </h3>
//     <p>
//       Tolip El Forsan Hotel fitness olip El Forsan Hotel fitness olip El
//       Forsan Hotel fitnessolip El Forsan Hotel fitness El Forsan Hotel
//       fitness..{" "}
//     </p>
//   </div>

//   <div className="info">
//     <a href="#">Go To Page</a>
//     <i className="fas fa-long-arrow-alt-right"></i>
//   </div>
// </div>
