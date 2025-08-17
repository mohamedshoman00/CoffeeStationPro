import React, { useEffect, useRef, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import "../assets/css/reels.css";
import url from "../assets/images/WhatsApp Video 2023-06-07 at 21.55.36.mp4";
import user from "../assets/images/Ellipse 7.png";
import ReelContent from "../components/ReelContent";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import HomeBackground from "../assets/images/image13.png";
import Reels from "./Reels";

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
      className="p-0 w-100 home-page h-dvh overflow-auto flex-col"
      style={{
        // height: "100vh",
        // backgroundImage: `url(${HomeBackground})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        position: "relative",
      }}>
       <HomeNavbar />
     <Reels/>
      </Container>
    </>
  );
};

export default Reels1;
