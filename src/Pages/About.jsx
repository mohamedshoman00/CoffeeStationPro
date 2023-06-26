import React from "react";
import "../assets/css/About.css";
import image from "../assets/images/about.png";
import image1 from "../assets/images/one.jpg";
import image2 from "../assets/images/two.png";
import image3 from "../assets/images/three.jpg";
import image4 from "../assets/images/four.webp";

export default function About() {
  return (
    <section className=" page-section-about " id="About">
      <div className="container  py-5">
        <div className="row py-5">
          <div className="col">
            <h2>
              "Discover the Rich Culture and Vibrant Communities of
              <span className="aboutSpan"> Egypt with Us</span>"
            </h2>
          </div>
          <div className="col text-muted">
            Welcome to our website, where we are dedicated to promoting local
            businesses and tourism in Egypt. Egypt is a land of ancient history
            and modern charm, with a rich culture and vibrant communities
            waiting to be explored. We offer a unique perspective on Egypt,
            showcasing the best of what this beautiful country has to offer.
            From the bustling streets of Cairo to the tranquil shores of the Red
            Sea, we invite you to discover the hidden gems and experience the
            warmth and hospitality of the Egyptian people. Join us on a journey
            of discovery and adventure in Egypt!
          </div>
        </div>
        <div className="aboutImg mb-5">
          <img src={image} className="w-100 mb-5" />
        </div>
        <div className="shadow row g-5 px-5 my-5">
          <div className="col">
            <div className="aboutAfter">
              <h2 className="fw-bolder h2About">Our Story</h2>
            </div>
          </div>
          <div className="col">
            <p>
              In our story section, we share our passion for Egypt and our
              desire to showcase the beauty of its local businesses and tourism.
              Our founders have a deep connection to Egypt and its people, and
              they wanted to create a platform that would support and promote
              the country's unique culture and heritage.
            </p>
            <p className="text-muted">
              Through our website, we aim to encourage visitors to explore
              Egypt's hidden gems and experience its warm hospitality firsthand.
              We believe that by supporting local businesses and tourism, we can
              help to create a brighter future for Egypt and its people. Join us
              on this journey of discovery and adventure in Egypt !
            </p>
          </div>
        </div>
        <div className="shadow row g-5 px-5 my-5">
          <div className="col">
            <div className="aboutAfter">
              <h2 className="fw-bolder h2About">Our value</h2>
            </div>
          </div>
          <div className="col">
            <p>
              Our values are at the core of everything we do. We are committed
              to sustainability and believe in preserving Egypt's natural beauty
              for future generations. We also prioritize supporting local
              communities and businesses, as we believe that they are the heart
              and soul of Egypt's economy and culture. We are passionate about
              showcasing the best of Egypt's culture and heritage, and we
              believe in representing the country in an authentic and respectful
              way. Finally, we are dedicated to providing our visitors with the
              best possible experience, from the moment they arrive on our
              website to the time they spend exploring Egypt's many treasures.
            </p>
          </div>
        </div>
        <div className="shadow row g-5 p-5 my-5">
          <div className="col">
            <div className="aboutAfter">
              <h2 className="fw-bolder h2About">Our Team</h2>
            </div>
          </div>
          <div className="col">
            <img src={image1} className="teamPic" />
            <h5 className="d-inline-block">Mahmoud ali</h5> <br />
            <img src={image2} className="teamPic my-4" />
            <h5 className="d-inline-block my-4">Mohammed mosaad </h5> <br />
            <img src={image3} className="teamPic" />
            <h5 className="d-inline-block">Khaled ibrehim</h5> <br />
          </div>
          <div className="col">
            <img src={image1} className="teamPic" />
            <h5 className="d-inline-block">Moustafa Mhamoud </h5> <br />
            <img src={image2} className="teamPic my-4" />
            <h5 className="d-inline-block my-4">Ahmed selim ali</h5> <br />
            <img src={image3} className="teamPic" />
            <h5 className="d-inline-block">Islam Mohammed</h5> <br />
          </div>
          <div className="col">
            <img src={image4} className="teamPic" />
            <h5 className="d-inline-block">Nada Maged</h5> <br />
          </div>
        </div>
      </div>
    </section>
  );
}
