import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import IntBg from "../assets/images/image15.png";
import "../assets/css/interests.css";
const InterestsPage = () => {
  const [showPlace, setShowPlace] = useState(false);
  return (
    <>
      <Container
        fluid
        className="interests-container m-0 p-0 w-100 d-flex justify-content-center flex-column align-items-center"
        style={{ height: "100vh" }}
      >
        <Container
          fluid
          className="Int-content m-0 p-0 d-flex w-100 h-100 d-flex justify-content-between align-items-center gap-3"
          style={{
            position: "relative",
            backgroundImage: `url(${IntBg})`,
            backgroundSize: "cover",
          }}
        >
          <div
            className="overlay"
            style={{
              opacity: "0.6",
              background:
                "linear-gradient(181.56deg, #000000 -39.28%, rgba(0, 0, 0, 0) 180.83%)",
            }}
          ></div>
          {showPlace && <div className="overlay"></div>}

          <Form
            className="p-5 mt-3 w-50"
            style={{ position: "relative", zIndex: "10" }}
          >
            <div className="top" style={{ position: "relative", zIndex: "10" }}>
              <h2>
                which types of things interest you <br /> the most?
              </h2>
              <p>
                select types of things or places you would like <br /> to go.
              </p>
            </div>
            <Form.Group className="form-group p-3 mb-3">
              <Form.Label className="mb-2">
                where city would you like to <br /> visit ?
              </Form.Label>
              <div
                className="d-flex justify-content-end me-4"
                style={{ position: "relative" }}
              >
                <Button onClick={() => setShowPlace(!showPlace)}>Where?</Button>
                {showPlace && (
                  <ul className="where-list">
                    <li>Ad Daqahliyah</li>
                    <li>Al Bahr al Ahmar</li>
                    <li>Al Buheira</li>
                    <li>Al Fayyum </li>
                    <li>Al Gharbiyah</li>
                    <li>Al Iskandariyah</li>
                    <li>Al Isma'iliyah</li>
                  </ul>
                )}
              </div>
            </Form.Group>
            <Form.Group className="form-group p-3 mb-3">
              <Form.Label className="mb-4">
                what places do you want to go?
              </Form.Label>
              <div
                className="d-flex justify-content-end me-4 gap-3 w-100"
                style={{ position: "relative" }}
              >
                <Form.Check type="checkbox" id={`check-api-checkbox1`}>
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label>Restaurants</Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-checkbox2`}>
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label>Cafe</Form.Check.Label>
                </Form.Check>
                <Form.Check
                  type="checkbox"
                  id={`check-api-checkbox3`}
                  className="w-50 d-flex gap-2"
                >
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label>Other</Form.Check.Label>
                  <Form.Control
                    className="p-0 h-75"
                    type="text"
                    style={{
                      // marginLeft: "-1px",
                      border: "none",
                      background: "none",
                      outline: "none",
                      boxShadow: "none",
                      borderBottom: "1px solid black",
                      borderRadius: "0",
                      width: "60px",
                    }}
                  />
                </Form.Check>
              </div>
            </Form.Group>
            <Form.Group className="form-group p-3 mb-3">
              <Form.Label className="mb-4">
                what places do you want to go?
              </Form.Label>
              <div
                className="d-flex justify-content-end me-4 gap-3 w-100"
                style={{ position: "relative" }}
              >
                <Form.Check type="checkbox" id={`check-api-checkbox12`}>
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label>Expensive</Form.Check.Label>
                </Form.Check>
                <Form.Check type="checkbox" id={`check-api-checkbox23`}>
                  <Form.Check.Input type="checkbox" isValid />
                  <Form.Check.Label>Cheap</Form.Check.Label>
                </Form.Check>
                <Form.Check
                  type="checkbox"
                  id={`check-api-checkbox3`}
                  className="w-50 d-flex gap-2"
                >
                  <Form.Check.Input
                    type="checkbox"
                    isValid
                    id={`check-api-checkbox24`}
                  />
                  <Form.Check.Label>Both</Form.Check.Label>
                </Form.Check>
              </div>
            </Form.Group>
            <Button className="form-btn">let’s go</Button>
          </Form>

          <div className="right-side">
            <h2>
              "Discover Egypt's hidden <span>gems</span> with our local business
              and tourism guide."
            </h2>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default InterestsPage;
