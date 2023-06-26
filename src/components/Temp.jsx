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
      <Container fluid className="p-0 m-0 w-100 mt-3">
        <div
          className="temp d-flex justify-content-between"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0px 4px 87px rgba(0, 0, 0, 0.15)",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex h-100 pt-4 ps-3 align-items-center">
            <div className="img h-100 text-center position-relative">
              <img
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
                className="fa-brands fa-gratipay"
              ></i>
            </div>
            <div
              className=" d-flex ms-4 flex-column h-100"
              style={{ height: "50px" }}
            >
              <h3
                className="mb-2"
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
          <div className="follow d-flex flex-column align-items-center justify-content-center p-4">
            <button
              className="cafe-det-btn w-100 m-0"
              onClick={() => setFollowBtn(!followBtn)}
              style={{
                backgroundColor: followBtn ? `#FD5B1F` : `#fff`,
                color: followBtn ? `#fff` : `#214E8A`,
              }}
            >
              {followBtn ? `Following` : `Follow`}
            </button>
            {/* <i className="fa-regular fa-heart text-center mt-2"></i>
            <p className="text-center m-0">5</p> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Temp;
