import React from "react";
import { Container } from "react-bootstrap";
import Temp from "./Temp";

const PostReacts = () => {
  return (
    <>
      <Container fluid className="m-0 p-2 col-6 mb-2">
        <h3
          className="mb-2 ps-2 mt-1"
          style={{
            color: "#214E8A",
            fontFamily: "Rubik",
            fontWeight: "bold",
          }}
        >
          People Who Reacted
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

export default PostReacts;
