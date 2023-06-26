import React from "react";
import { Container } from "react-bootstrap";
import Temp from "./Temp";

const Notifications = () => {
  return (
    <>
      <Container
        fluid
        className="m-0 p-2 mb-2"
        style={{
          width: "400px",
          background: "#fff",
          position: "absolute",
          zIndex: "100",
          left: "8%",
          top: "15%",
          borderRadius: "10px",
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
          Notifications
        </h3>
        <Temp />
        <Temp />
        <Temp />
        <Temp />
        <Temp />
      </Container>
    </>
  );
};

export default Notifications;
