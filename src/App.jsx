import React, { useEffect, useRef, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Cafes from "./Pages/Cafes";
import HomeNavbar from "./components/Navbar/HomeNavbar";
import Restaurants from "./Pages/Restaurants";
import AllEvents from "./Pages/AllEvents";
import { Container } from "react-bootstrap";
import WebFooter from "./components/WebFooter";
import EventDetails from "./Pages/EventDetails";
import Reels from "./Pages/Reels";
import Reels1 from "./Pages/Reels1";
import Profile from "./Pages/Profile";
import Search from "./components/Search";
import Post from "./components/Post";
import Photos from "./components/Photos";
import Posts from "./Pages/Posts";
import Reviews from "./Pages/Reviews";
import Community from "./Pages/Community";
import InterestsPage from "./Pages/InterestsPage";
import CafeDetails from "./Pages/CafeDetails";
import Products from "./Pages/Products";
import Directions from "./Pages/Directions";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FormLogin from "./Pages/FormLogin";
import Temp from "./components/Temp";
import PostReacts from "./components/PostReacts";
import PostComments from "./components/PostComments";
import Notifications from "./components/Notifications";
import AddComments from "./components/AddComments";
import { useSelector } from "react-redux";

const App = () => {
  const [state, setstate] = useState({});
  const location = useLocation();
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [location]);
  // const isLogin = useSelector((store) => store.loginOrNot);
  // sessionStorage.removeItem("loginOrNot");
  const isLogin = sessionStorage.getItem("loginOrNot") || false;
  console.log(isLogin);
  // console.log(isLogin);
  return (
    <>
      <Container fluid className="p-0" ref={ref}>
        {location.pathname !== `/home` &&
        location.pathname !== `/reels` &&
        location.pathname !== `/interests` &&
        location.pathname !== `/sign-up` ? (
          <HomeNavbar />
        ) : null}
        {/* {location.pathname !== `/reels` ? <HomeNavbar /> : null} */}
        {/* <PostReacts />
        <PostComments />
        <Notifications />
        <AddComments /> */}
        {/* <Temp /> */}
        <Routes>
          {isLogin ? (
            <Route path="*" element={<Navigate to="/home" replace />} />
          ) : (
            <Route path="*" element={<Navigate to="/sign-up" replace />} />
          )}

          <Route path="/sign-up" element={<FormLogin />} />
          {isLogin && (
            <>
              <Route
                path="/sign-up"
                element={<Navigate to="/home" replace />}
              />
              <Route path="/home" element={<Home />} />
              <Route path="/reels" element={<Reels1 />} />
              <Route path="/community" element={<Community />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/interests" element={<InterestsPage />} />
              <Route path="/all-cafes" element={<Cafes />} />
              <Route path="/all-restaurants" element={<Restaurants />} />
              <Route path="/all-events" element={<AllEvents />} />
              <Route path="/event-details" element={<EventDetails />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />}>
                <Route
                  path="/profile/"
                  element={<Navigate to="posts" replace />}
                />
                <Route path="posts" element={<Posts />} />
                <Route path="photos" element={<Photos />} />
                <Route path="reels" element={<Reels />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="/cafe-details" element={<CafeDetails />}>
                <Route
                  path="/cafe-details/"
                  element={<Navigate to="directions" replace />}
                />
                <Route path="directions" element={<Directions />} />
                <Route path="products" element={<Products />} />
                <Route path="reels" element={<Reels />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </>
          )}
        </Routes>
        {location.pathname !== `/home` && location.pathname !== `/reels` ? (
          <WebFooter />
        ) : null}
      </Container>
    </>
  );
};

export default App;
