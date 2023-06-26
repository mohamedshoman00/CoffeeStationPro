import React from "react";
import user from "../assets/images/240_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg";
import { Button, Container } from "react-bootstrap";

const AddComments = () => {
  return (
    <>
      <Container
        fluid
        className="m-0 p-0 d-flex align-items-end flex-column pb-4 px-3 col-12"
        style={{
          right: "0",
          position: "absolute",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.2)",
          width: "auto",
        }}
      >
        <div className="mind mt-3 ">
          <div className="container p-3">
            <img src={user} alt="" />
            <input
              type="text"
              id="text-input"
              placeholder="What Is In Your Mind"
            />
            <div className="icons-text">
              <div
                className="icon one"
                style={{
                  marginLeft: "100px",
                }}
              >
                <i className="fa-regular fa-image"></i>
                <p>photo/video</p>
              </div>
              <div
                className="icon two"
                style={{
                  marginLeft: "100px",
                }}
              >
                <i className="fa-solid fa-clapperboard"></i>
                <p>add reel</p>
              </div>
              <div
                className="icon three"
                style={{
                  marginLeft: "100px",
                  marginRight: "10px",
                }}
              >
                <i className="fa-solid fa-user-tag"></i>
                <p>tag people</p>
              </div>
            </div>
          </div>
        </div>
        <Button className="form-btn mt-4 w-25 me-3 mb-3">Add</Button>
      </Container>
    </>
  );
};

export default AddComments;
