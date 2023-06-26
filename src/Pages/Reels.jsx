import React from "react";
import ReelContent from "../components/ReelContent";
import { Container } from "react-bootstrap";

const Reels = () => {
  return (
    <>
      <Container
        fluid
        className="col-5 video-container1"
        style={{
          paddingLeft: "87px",
          marginTop: "10px",
          // maxHeight: "90vh",
          // overflow: "hidden",
        }}
      >
        <ReelContent />
        <ReelContent />
        <ReelContent />
        <ReelContent />
        <ReelContent />
      </Container>
    </>
  );
};

export default Reels;
