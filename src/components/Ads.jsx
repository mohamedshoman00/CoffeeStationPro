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
        className="col-9 col-md-8 col-lg-8 px-0 cnt  md:min-h-[200px]"
        style={{
          background: `#F1F1F1`,
          borderRadius: ` 20px`,
          // height: "270px",
          maxHeight: "500px",
        }}
      >
        <div className="ads d-flex justify-center items-center md:justify-between gap-3  md:flex-row">
          <div className="image">
            <img src={adsImg} alt="" className="h-[150px] md:h-full" style={{ height: "100%" }} />
          </div>
          <div className="text">
            <h6 className="text-xl lg:text-4xl">
              Save <span>15%</span> or more
            </h6>
            <p className="text-sm lg:text-3xl">Plan your dream trip with a Getaway Deal</p>
          </div>
          <div className="div-btn w-[150px] h-[150px] items-center justify-center">
            <img src={ads1} alt="" />
            <button className="btn hidden md:block">Details</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Ads;
