import React from "react";
import { Container } from "react-bootstrap";
import Temp from "./Temp";

const PostComments = () => {
  return (
    <>
      <Container
        fluid
        className="m-0 p-3 col-6 mb-2"
        style={{
          position: "absolute",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.2)",
          right: "1%",
          bottom: "1%",
        }}
      >
        <h3
          className="mb-2 ps-2 mt-1"
          style={{
            color: "#214E8A",
            fontFamily: "Rubik",
            fontWeight: "bold",
          }}
        >
          Comments
        </h3>
        <Temp />
        <Temp />
        <Temp />
        <Temp />
        <Temp />
        <Temp />
        <Temp />
      </Container>
    </>
  );
};

export default PostComments;
