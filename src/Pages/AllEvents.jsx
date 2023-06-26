import React from "react";
import cairotower from "../assets/images/image22.png";
import { Container } from "react-bootstrap";
import Events from "../components/Events";
import { Outlet, useLocation } from "react-router-dom";

const AllEvents = () => {
  const location = useLocation();
  const EventData = [
    {
      id: 1,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
    {
      id: 2,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
    {
      id: 3,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
    {
      id: 4,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
    {
      id: 5,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
    {
      id: 6,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
    {
      id: 7,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
    {
      id: 8,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
    {
      id: 9,
      eventName: "cairo tower",
      eventDate: "sat, jan18 at 8pm",
      eventPlace: "zmalek, cairo",
      eventImage: cairotower,
    },
  ];
  return (
    <>
      <Container
        fluid
        className="p-0 w-100 d-flex justify-content-center flex-column align-items-center"
      >
        <Events data={EventData} />
      </Container>
    </>
  );
};

export default AllEvents;
