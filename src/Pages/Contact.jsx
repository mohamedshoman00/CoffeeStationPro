import React from "react";
import "../assets/css/Contact.css";
export default function Contact() {
  return (
    <section className=" " id="contact">
      <div className="container p-5">
        <h2 className="h2Contact">Contact Us</h2>
        <p className="lead">
          Any question or remarks? Just write us a message!
        </p>
        <br /> <br />
        <div className="shadow row px-5 g-5 flex flex-col md:flex-row">
          <div className="w-full md:w-[40%] bg-black p-5 rounded contact-info h-[350px] md:h-[600px]">
            <div className="header">
              <h3 className=" text-white">Contact information</h3>
              <p className="text-white fw-light">
                {" "}
                Say something to start a live chat!
              </p>
              <i className=" py-3 fa-solid fa-phone-volume text-white fa-light">
                {" "}
              </i>{" "}
              <p className="d-inline text-white">+1012 3456 789</p>
              <br />
              <i className="fa-solid fa-envelope text-white fa-light"></i>{" "}
              <p className="d-inline text-white">demo@gmail.com</p>
            </div>

            <div className=" circle1 rounded-circle"></div>
            <div className=" circle2 rounded-circle"></div>

            <div className="icons">
              <div className="iconC rounded-circle d-inline-flex justify-content-center align-items-center">
                <i className="fa-brands fa-twitter "></i>
              </div>
              <div className="iconC rounded-circle d-inline-flex justify-content-center align-items-center mx-3">
                <i className="fa-brands fa-instagram "></i>
              </div>
              <div className="iconC rounded-circle d-inline-flex justify-content-center align-items-center">
                <i className="fa-brands fa-discord "></i>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%] p-5">
            <div className="row">
              <div className="col-6">
                <label for="Fname">First Name</label>
                <input className="contactInput form-control-plaintext border-bottom" />
                <br />
                <label for="email">Email </label>
                <input className="contactInput form-control-plaintext border-bottom" />
              </div>
              <div className="col-6">
                <label for="Lname">Last Name</label>
                <input className="contactInput form-control-plaintext border-bottom" />
                <br />
                <label for="number">Phone number</label>
                <input className="contactInput form-control-plaintext border-bottom" />
              </div>
            </div>
            <div className="my-5">
              <h3> Select subject? </h3>

              <div className="options">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    General inquiry
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    General inquiry
                  </label>
                </div>
                <div className="form-check form-check-inline my-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    General inquiry
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio4"
                    value="option4"
                  />
                  <label className="form-check-label" for="inlineRadio2">
                    General inquiry
                  </label>
                </div>
              </div>
              <div className="message my-5">
                <label for="message" className="">
                  Message
                </label>
                <input
                  className="contactInput form-control-plaintext border-bottom"
                  placeholder="Write your message .."
                />
              </div>
              <button type="button" className="btn btn-dark p-3">
                Send Message{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
