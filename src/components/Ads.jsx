import React from "react";
import { Container } from "react-bootstrap";
import adsImg from "../assets/images/image11.png";
import ads1 from "../assets/images/wepik-photo-mode-2022631-184123 1.png";
import "../assets/css/ads.css";
const Ads = () => {
  return (
    <>
      <Container
        fluid
        className="col-8 col-lg-8 px-0 cnt"
        style={{
          background: `#F1F1F1`,
          borderRadius: ` 20px`,
          height: "270px",
          maxHeight: "270px",
        }}
      >
        <div className="ads d-flex h-100 justify-content-between align-items-center gap-3">
          <div className="image">
            <img src={adsImg} alt="" style={{ height: "100%" }} />
          </div>
          <div className="text">
            <h6>
              Save <span>15%</span> or more
            </h6>
            <p>Plan your dream trip with a Getaway Deal</p>
          </div>
          <div className="div-btn">
            <img src={ads1} alt="" />
            <button className="btn">Details</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Ads;
