import React, { useEffect, useState } from "react";
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
import { FaArrowUp } from "react-icons/fa";
const Home = () => {
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const DiscoverData1 = [
    {
      id: 1,
      placeFirstName: "Ismalia",
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
      placeLastName: "Ismalia",
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
      placeFirstName: "Ismalia",
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
      placeLastName: "Ismalia",
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
           <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[--main-color] text-white shadow-lg hover:bg-[--main-color] transition-all"
          style={{zIndex:1000}}
        >
          <FaArrowUp size={25} />
        </button>
      )}
    </div>
        {/* Start Home Page */}
        <MainHome />
        {/* End Home Page */}
        {/* start welcome card */}
        <div className="card col-10 col-lg-9">
          <div className="container text-justify md:text-center ">
            <h1 className="md:text-4xl">
              Welcome To <span>Ismalia</span> Mahmoud
            </h1>
            <p className="mt-2 text-justify md:text-center">
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
          <div className="container flex flex-column md:flex-row">
            <div className="w-full   md:w-[25%] md:px-0 icon mb-3 md:mb-0">
              <i className="text-3xl fa-solid fa-magnifying-glass"></i>
              <h4>Search</h4>
              <p>Let us know where you'd like to go.</p>
            </div>
            <div className="icon w-full   md:w-[25%] md:px-0 mb-3 md:mb-0">
              <i className="text-3xl fa-regular fa-hand-pointer"></i>
              <h4>Choose</h4>
              <p>
                We'll show you options, choose <br /> the right one for you.
              </p>
            </div>
            <div className="icon w-full   md:w-[25%] md:px-0 mb-3 md:mb-0">
              <i className="text-3xl fa-solid fa-check"></i>
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
        <div className="container pe-0 w-[95%] max-w-screen-lg ">
          <h1 className="main-title text-[24px] md:text-[30px]">
            Global coverage in over 200 cafe, resturants and other places in
            Ismalia
          </h1>
          <div className="w-full world">
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
