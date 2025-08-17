import React, { useEffect, useRef, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import "../assets/css/reels.css";
import url from "../assets/images/WhatsApp Video 2023-06-07 at 21.55.36.mp4";
import user from "../assets/images/Ellipse 7.png";
const ReelContent = () => {
  const [isVideoPlaying, setisVideoPlaying] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [followBtn, setFollowBtn] = useState(false);
  const vidRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      vidRef.current.pause();
      setisVideoPlaying(false);
    } else {
      vidRef.current.play();
      setisVideoPlaying(true);
    }
  };
  useEffect(() => {
    const scroll = document.getElementById("video-container1");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        vidRef.current.pause();
      });
    }
  }, []);

  return (
    <>
      <Card className="mt-5 relative p-0 w-100">
        <Card.Header
          className="w-100 px-5 py-4 position-absolute card-header top-[7.5%] md:top-0 md:bg-transparent"
          style={{ height: "50px", }}>
          <ul className="d-flex justify-content-center align-items-center w-100 gap-5">
            <li>Nearby</li>
            <li>Following</li>
            <li>For You</li>
          </ul>
        </Card.Header>
        <Card.Body
          className="w-100 p-0 d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}>
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
          className="w-100 px-5 py-2 ps-2 position-absolute card-footer d-flex justify-content-center align-items-center md:bottom-0 md:bg-transparent"
          style={{
            // height: "50px",
            
            background: "rgba(0, 0, 0, 0.4)",
            bottom: "7.5%",
            border: "none",
          }}>
          <div className="review p-0 md:px-3 md:w-[60%] lg:w-[38%]">
            <h3 className="mb-3 flex justify-start items-center" >
              <img
                src={user}
                alt=""
                style={{
                  width: "58px",
                  height: "58px",
                  marginRight: "15px",
                  marginBottom:'10px'
                }}
              />
              Mahmoud
              <button
                onClick={() => setFollowBtn(!followBtn)}
                style={{
                  backgroundColor: followBtn ? `#FD5B1F` : `inherit`,
                }}>
                {followBtn ? `Following` : `Follow`}
              </button>
            </h3>
            <p className="text-justify w-full">
              The Social Grind is a cafe that aims to provide a warm and
              welcoming environment for people to socialize, work, and relax.
              {seeMore &&
                ` The cafe features comfortable seating, a relaxed atmosphere, and high-quality coffee and food`}
              ...
              <span onClick={() => setSeeMore(!seeMore)}>
                See {seeMore ? `Less` : `More`}
              </span>
            </p>
          </div>
        </Card.Footer>
        <div className="video-side md:right-[22%]">
          <div
            className="s1"
            onClick={() => {
              setClicked(!clicked);
            }}>
            <i
              className={clicked ? `fa-solid fa-heart` : `fa-regular fa-heart`}
              style={{ color: clicked ? `#FD5B1F` : `#214E8A` }}></i>
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
            }}></i>
          <i
            className="fa-regular fa-bookmark"
            style={{
              marginTop: "40px",
            }}></i>
          <i
            className="fa-solid fa-ellipsis-vertical"
            style={{
              marginTop: "20px",
              marginLeft: "7px",
              fontSize: "35px",
            }}></i>
        </div>
      </Card>
    </>
  );
};

export default ReelContent;
