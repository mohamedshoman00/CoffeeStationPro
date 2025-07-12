import React, { useEffect, useRef, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import "../assets/css/reels.css";
import url from "../assets/images/WhatsApp Video 2023-06-07 at 21.55.36.mp4";
import user from "../assets/images/Ellipse 7.png";
import ReelContent from "../components/ReelContent";
const Reels1 = () => {
  // const [isVideoPlaying, setisVideoPlaying] = useState(false);
  // const [seeMore, setSeeMore] = useState(false);
  // const [clicked, setClicked] = useState(false);
  // const [followBtn, setFollowBtn] = useState(false);
  // const vidRef = useRef();

  // const onVideoClick = () => {
  //   if (isVideoPlaying) {
  //     vidRef.current.pause();
  //     setisVideoPlaying(false);
  //   } else {
  //     vidRef.current.play();
  //     setisVideoPlaying(true);
  //   }
  // };

  // useEffect(() => {
  //   const scroll = document.getElementById("video-container1");

  //   if (scroll) {
  //     scroll.addEventListener("scroll", () => {
  //       vidRef.current.pause();
  //     });
  //   }
  // }, []);

  return (
    <>
      <Container
        fluid
        className="p-0 w-100 position-relative d-flex justify-content-center align-items-center reel-cont">
        <Sidebar />
        <Container
          fluid
          className="col-5 video-container1"
          style={{
            paddingLeft: "87px",
            marginTop: "10px",
            // maxHeight: "90vh",
            // overflow: "hidden",
          }}>
          {/* <Card className="m-0 p-0 position-relative w-100">
            <Card.Header
              className="w-100 px-5 py-4 position-absolute card-header"
              style={{ height: "50px", background: "none" }}
            >
              <ul className="d-flex justify-content-evenly align-items-center w-100">
                <li>Nearby</li>
                <li>Following</li>
                <li>For You</li>
              </ul>
            </Card.Header>
            <Card.Body
              className="w-100 p-0 d-flex justify-content-center align-items-center"
              style={{ height: "90vh" }}
            >
              <video
                onClick={onVideoClick}
                ref={vidRef}
                src={url}
                loop
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Card.Body>
            <Card.Footer
              className="w-100 px-5 py-4 position-absolute card-footer d-flex justify-content-center align-items-center"
              style={{
                height: "50px",
                background: "none",
                bottom: "50px",
                border: "none",
              }}
            >
              <div className="review">
                <h3>
                  <img
                    src={user}
                    alt=""
                    style={{
                      width: "58px",
                      height: "58px",
                      marginRight: "15px",
                    }}
                  />
                  Mahmoud
                  <button
                    onClick={() => setFollowBtn(!followBtn)}
                    style={{
                      backgroundColor: followBtn ? `#FD5B1F` : `inherit`,
                    }}
                  >
                    {followBtn ? `Following` : `Follow`}
                  </button>
                </h3>
                <p>
                  The Social Grind is a cafe that aims to provide a warm and
                  welcoming environment for people to socialize, work, and
                  relax.
                  {seeMore &&
                    ` The cafe features comfortable seating, a relaxed atmosphere, and high-quality coffee and food`}
                  ...
                  <span onClick={() => setSeeMore(!seeMore)}>
                    See {seeMore ? `Less` : `More`}
                  </span>
                </p>
              </div>
            </Card.Footer>
            <div className="video-side">
              <div
                className="s1"
                onClick={() => {
                  setClicked(!clicked);
                }}
              >
                <i
                  className={
                    clicked ? `fa-solid fa-heart` : `fa-regular fa-heart`
                  }
                  style={{ color: clicked ? `#FD5B1F` : `#214E8A` }}
                ></i>
                <p>10</p>
              </div>
              <div className="s1">
                <i className="fa-regular fa-comment-dots"></i>
                <p>10</p>
              </div>
              <i
                className="fa-regular fa-share-from-square"
                style={{
                  marginTop: "20px",
                }}
              ></i>
              <i
                className="fa-regular fa-bookmark"
                style={{
                  marginTop: "40px",
                }}
              ></i>
              <i
                className="fa-solid fa-ellipsis-vertical"
                style={{
                  marginTop: "20px",
                  marginLeft: "7px",
                  fontSize: "35px",
                }}
              ></i>
            </div>
          </Card> */}
          <ReelContent />
          <ReelContent />
          <ReelContent />
          {/*  */}
        </Container>
      </Container>
    </>
  );
};

export default Reels1;
