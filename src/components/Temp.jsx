import React, { useState } from "react";
import { Container } from "react-bootstrap";
import person from "../assets/images/person.jpg";

const Temp = () => {
  const [followBtn, setFollowBtn] = useState(false);
  const data = {
    image: person,
    name: "Layla Ahmed",
    comment: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam libero qui a quo mollitia odit,`,
  };
  return (
    <>
      <Container fluid className="p-0 m-0 mt-3 w-100">
        <div
          className="w-full temp d-flex justify-content-between"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0px 4px 87px rgba(0, 0, 0, 0.15)",
            borderRadius: "10px",
          }}
        >
          <div className="p-1 md:pt-4 d-flex h-100 ps-3 align-items-center">
            <div className="text-center img h-100 position-relative">
              <img className="w-9 h-9 md:w-11 md:h-11"
                src={person}
                alt="person"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
              <i
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "40px",
                  transform: "translateY(-50%)",
                  fontSize: "22px",
                  color: "#F44336",
                }}
                className="text-lg fa-brands md:text-[22px] fa-gratipay left-6 md:left-8"
              ></i>
            </div>
            <div
              className=" d-flex ms-4 flex-column h-100"
              style={{ height: "50px" }}
            >
              <h3
                className="mb-2 text-sm md:text-lg md:ml-2"
                style={{
                  color: "#214E8A",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Layla Ahmed
              </h3>
              {/* <p className="mb-2 w-75" style={{ fontSize: "14px" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam libero qui a quo mollitia odit,
              </p> */}
            </div>
          </div>
    <div className="hidden p-4 follow d-flex flex-column align-items-center justify-content-center md:flex">
            <button
              className="m-0 cafe-det-btn w-100"
              onClick={() => setFollowBtn(!followBtn)}
              style={{
                backgroundColor: followBtn ? `#FD5B1F` : `#fff`,
                color: followBtn ? `#fff` : `#214E8A`,
              }}
            >
              {followBtn ? `Following` : `Follow`}
            </button>
            {/* <i className="mt-2 text-center fa-regular fa-heart"></i>
            <p className="m-0 text-center">5</p> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Temp;
