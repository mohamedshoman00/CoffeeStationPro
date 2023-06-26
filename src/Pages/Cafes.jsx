import React, { useRef } from "react";
import TopCafe from "../components/TopCafe";
import { Container } from "react-bootstrap";
import coffie from "../assets/images/Rectangle 4910.png";
const Cafes = () => {
  const CoffeeData = [
    {
      id: 1,
      itemFirstName: "Coffe",
      itemLastName: "Title",
      image: coffie,
      description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit`,
      rate: 4.5,
    },
    {
      id: 2,
      itemFirstName: "Coffe",
      itemLastName: "Title",
      image: coffie,
      description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit`,
      rate: 4.5,
    },
    {
      id: 3,
      itemFirstName: "Coffe",
      itemLastName: "Title",
      image: coffie,
      description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit`,
      rate: 4.5,
    },
    {
      id: 4,
      itemFirstName: "Coffe",
      itemLastName: "Title",
      image: coffie,
      description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit`,
      rate: 4.5,
    },
    {
      id: 5,
      itemFirstName: "Coffe",
      itemLastName: "Title",
      image: coffie,
      description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit`,
      rate: 4.5,
    },
    {
      id: 6,
      itemFirstName: "Coffe",
      itemLastName: "Title",
      image: coffie,
      description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit`,
      rate: 4.5,
    },
    {
      id: 7,
      itemFirstName: "Coffe",
      itemLastName: "Title",
      image: coffie,
      description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit`,
      rate: 4.5,
    },
    {
      id: 8,
      itemFirstName: "Coffe",
      itemLastName: "Title",
      image: coffie,
      description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit`,
      rate: 4.5,
    },
    {
      id: 9,
      itemFirstName: "Coffe",
      itemLastName: "Title",
      image: coffie,
      description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit`,
      rate: 4.5,
    },
    {
      id: 10,
      itemFirstName: "Coffe",
      itemLastName: "Title",
      image: coffie,
      description: `   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit`,
      rate: 4.5,
    },
  ];
  const title = `cafes`;
  return (
    <>
      <Container
        fluid
        className="p-0 w-100 d-flex justify-content-center flex-column align-items-center"
      >
        <TopCafe data={CoffeeData} title={title} />
      </Container>
    </>
  );
};

export default Cafes;
