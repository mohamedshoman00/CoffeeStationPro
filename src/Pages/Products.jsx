import React, { useState } from "react";
import { Container } from "react-bootstrap";
import menu from "../assets/images/menu.png";
const Products = () => {
  const [viewMenu, setViewMenu] = useState(false);
  return (
    <>
      {" "}
      <Container
        fluid
        className="w-100 mb-5 d-flex justify-content-center"
        style={{ background: "#fff" }}
      >
        <Container
          fluid
          className="p-0 m-0 col-10  d-flex justify-content-start align-items-center"
          style={{ position: "relative", height: viewMenu ? `140vh` : "100%" }}
        >
          <img
            src={menu}
            alt=""
            height="500px"
            onClick={() => setViewMenu(!viewMenu)}
            style={{
              scale: viewMenu ? `2` : ``,
              width: viewMenu ? `40%` : ``,
              position: viewMenu ? `absolute` : ``,
              top: "25%",
              left: "20%",
              cursor: "pointer",
            }}
          />
          {/* {viewMenu && (
          <div
            className="w-100 d-flex justify-content-center"
            style={{ position: "absolute", top: "0" }}
          >
            <img src={menu} alt="" width="50%" />
          </div>
        )} */}
        </Container>
      </Container>
    </>
  );
};

export default Products;
