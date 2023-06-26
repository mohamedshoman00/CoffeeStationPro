import React, { useState } from "react";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import { Container } from "react-bootstrap";
import HomeBackground from "../assets/images/image13.png";
import handCheck from "../assets/images/Vector1.png";
import "../assets/css/home.css";
import { NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import cardBg from "../assets/images/Rectangle4878.png";
import museum from "../assets/images/meuseum.jpeg";
import tolip from "../assets/images/to.jpeg";
import elsala from "../assets/images/el.jpeg";
import mercure from "../assets/images/mer.jpeg";
import darb from "../assets/images/darb.jpeg";
// import sph from "../assets/images/image12.png";
import cairotower from "../assets/images/image22.png";
// import tower from "../assets/images/image23.png";
import world from "../assets/images/image24.png";
import Post from "../components/Post";
import TopCafe from "../components/TopCafe";
import Events from "../components/Events";
import WebFooter from "../components/WebFooter";
import DiscoverPlace from "../components/DiscoverPlace";
import coffie from "../assets/images/Rectangle 4910.png";
import Ads from "../components/Ads";
import MainHome from "../components/MainHome";
const Home = () => {
  const DiscoverData1 = [
    {
      id: 1,
      placeFirstName: "Ismailia",
      placeLastName: "Museum",
      description: ` Tolip El Forsan Hotel fitness olip El Forsan Hotel fitness olip El Forsan Hotel fitnessolip El Forsan Hotel fitness El Forsan Hotel fitness..`,
      placeImage: museum,
      pageInfo: true,
    },
    {
      id: 2,
      placeFirstName: "Tolip",
      placeLastName: "EL Forsan",
      description: ` Tolip El Forsan Hotel fitness olip El Forsan Hotel fitness olip El Forsan Hotel fitnessolip El Forsan Hotel fitness El Forsan Hotel fitness..`,
      placeImage: tolip,
      pageInfo: true,
    },
    {
      id: 3,
      placeFirstName: "El Sala",
      placeLastName: "Ala ElNaby",
      description: ` Tolip El Forsan Hotel fitness olip El Forsan Hotel fitness olip El Forsan Hotel fitnessolip El Forsan Hotel fitness El Forsan Hotel fitness..`,
      placeImage: elsala,
      pageInfo: true,
    },
    {
      id: 4,
      placeFirstName: "Mercure",
      placeLastName: "Ismailia",
      description: ` Tolip El Forsan Hotel fitness olip El Forsan Hotel fitness olip El Forsan Hotel fitnessolip El Forsan Hotel fitness El Forsan Hotel fitness..`,
      placeImage: mercure,
      pageInfo: true,
    },
    {
      id: 5,
      placeFirstName: "Darb",
      placeLastName: "Shakamba",
      description: ` Tolip El Forsan Hotel fitness olip El Forsan Hotel fitness olip El Forsan Hotel fitnessolip El Forsan Hotel fitness El Forsan Hotel fitness..`,
      placeImage: darb,
      pageInfo: true,
    },
  ];
  const DiscoverData2 = [
    {
      id: 1,
      placeFirstName: "Ismailia",
      placeLastName: "Museum",
      placeImage: museum,
      placeCount: "500 cafe",
    },
    {
      id: 2,
      placeFirstName: "Tolip",
      placeLastName: "EL Forsan",
      placeImage: tolip,
      placeCount: "500 cafe",
    },
    {
      id: 3,
      placeFirstName: "El Sala",
      placeLastName: "Ala ElNaby",
      placeImage: elsala,
      placeCount: "500 cafe",
    },
    {
      id: 4,
      placeFirstName: "Mercure",
      placeLastName: "Ismailia",
      placeImage: mercure,
      placeCount: "500 cafe",
    },
    {
      id: 5,
      placeFirstName: "Darb",
      placeLastName: "Shakamba",
      placeImage: darb,
      placeCount: "500 cafe",
    },
  ];
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
  ];
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
  ];
  const Titles = [`cafes`, `restaurants`];

  return (
    <>
      <Container
        fluid
        className="p-0 w-100 d-flex justify-content-center flex-column align-items-center"
      >
        {/* Start Home Page */}
        <MainHome />
        {/* End Home Page */}
        {/* start welcome card */}
        <div className="card col-9 col-lg-9">
          <div className="container">
            <h1>
              Welcome To <span>Ismailia</span> Mahmoud
            </h1>
            <p>
              <span>Welcome </span> to our beautiful city! We're excited to have
              you here. Explore our local attractions, taste <br /> our
              delicious cuisine, and immerse yourself in our unique culture.
              Enjoy your visit and make <br /> unforgettable memories !
            </p>
          </div>
        </div>
        {/* end welcome card */}
        {/* Discover 1 */}
        {/* Start discover 1  */}
        <DiscoverPlace data={DiscoverData1} />
        {/* End discover */}
        {/* Start post */}
        <Post />
        {/* End post */}
        {/* Discover 2 */}
        {/* Start discover 2  */}
        <DiscoverPlace data={DiscoverData2} />
        {/* End discover */}
        {/* start icon */}
        <div className="icons col-9 col-lg-9">
          <div className="container">
            <div className="icon">
              <i className="fa-solid fa-magnifying-glass"></i>
              <h4>Search</h4>
              <p>Let us know where you'd like to go.</p>
            </div>
            <div className="icon">
              <i className="fa-regular fa-hand-pointer"></i>
              <h4>Choose</h4>
              <p>
                We'll show you options, choose <br /> the right one for you.
              </p>
            </div>
            <div className="icon">
              <i className="fa-solid fa-check"></i>
              <h4>Go</h4>
              <p>Let’s go and explore more places</p>
            </div>
          </div>
        </div>
        {/* end icon */}
        {/* Start Cafe */}
        <TopCafe data={CoffeeData} title={Titles[0]} />
        {/* End Cafe */}
        {/* Start Advertise */}

        <Ads />
        {/* End Advertise */}
        {/* Start Cafe */}
        <TopCafe data={CoffeeData} title={Titles[1]} />
        {/* End Cafe */}
        {/* Start Event */}
        <Events data={EventData} />
        {/* ُEnd Event */}
        {/* start world */}
        <div className="container col-9 col-lg-9">
          <h1 className="main-title">
            Global coverage in over 200 cafe, resturants and other places in
            ismalia
          </h1>
          <div className="world">
            <img src={world} alt="" />
          </div>
        </div>
        {/* end world */}
        {/* Footer */}
        <WebFooter />
        {/* Footer */}
      </Container>
    </>
  );
};

export default Home;
