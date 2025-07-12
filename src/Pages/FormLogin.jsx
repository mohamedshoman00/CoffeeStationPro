import React, { useEffect, useRef, useState } from "react";
import "../assets/css/FormLogin.css";
import { motion } from "framer-motion";
import HomeNavbar from "../components/Navbar/HomeNavbar";
import {
  LoginSchema,
  SignUpSchema,
} from "../components/Validation/UserValidation";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginOrNotFun } from "../redux/actions/appAction";

const FormLogin = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState(true);
  // const [login]
  const LoginSubmitHandler = async (event) => {
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    const isValid = await LoginSchema.isValid(formData);
    const errors = await LoginSchema.validate(formData, {
      abortEarly: false,
    }).catch((err) => {
      return err.errors;
    });
    if (isValid) {
      toast.success("Successfully Login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      event.target[0].value = "";
      event.target[1].value = "";
      // dispatch(LoginOrNotFun());
      const ee = setTimeout(() => {
        sessionStorage.setItem("loginOrNot", true);
        nav("/home", { replace: true });
        clearTimeout(ee);
      }, 1000);
    } else {
      toast.error(errors[0], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const SignSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
    };
    const isValid = await SignUpSchema.isValid(formData);
    const errors = await SignUpSchema.validate(formData, {
      abortEarly: false,
    }).catch((err) => {
      return err.errors;
    });
    if (isValid) {
      toast.success("Successfully Sign Up", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoginForm(!loginForm);
      event.target[0].value = "";
      event.target[1].value = "";
      event.target[2].value = "";
      event.target[3].value = "";
    } else {
      toast.error(errors[0], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const authAxios = axios.create({
    baseURL: `https://ENG Cafe-v2.000webhostapp.com/api`,
    headers: {
      "Content-Type": `application/json`,
      Authorization: `Bearer 50|XkEx78NsusS90hSuE0qYEWBl13cncqClogBbs3qE`,
    },
  });
  const getData = async () => {
    // try {
    // await axios
    //   .post(
    //     `https://ENG Cafe-v2.000webhostapp.com/api/login`,
    //     {
    //       email: `mohamedshoman@eee.com`,
    //       password: `11223344`,
    //     },
    //     {
    //       headers: {
    //         Accept: `Access-Control-Allow-Origin`,
    //       },
    //     }
    //   )
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));
    ///////////////
    // console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
    fetch("https://ENG Cafe-v2.000webhostapp.com/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: `mohamedshoman@eee.com`,
        password: `11223344`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Do something with the
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
    // const res = await axios.get(`https://api.publicapis.org/entries`);
    // console.log(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div id="form-login" style={{ overflow: "hidden", position: "relative" }}>
        <ToastContainer />
        <div className="homeLayer vh-100">
          <div className="overlay" style={{ opacity: "0.5" }}></div>
          <HomeNavbar />
          <div className="container d-flex flex-column justify-content-start align-items-center vh-100 pt-4 sign-up">
            <h2
              className={`text-white fw-bold mb-5 ${loginForm ? `fs-1` : `fs-3`}
              ${loginForm ? `pb-0` : `pb-3`}
              `}
              style={{ cursor: "pointer" }}
              onClick={() => setLoginForm(true)}>
              Sign Up
            </h2>
            <motion.div
              className="signUp"
              initial={{ opacity: loginForm ? `0` : `0` }}
              animate={{ opacity: loginForm ? `1` : `0` }}
              transition={{
                duration: 2,
                delay: 0.1,
              }}>
              <form onSubmit={SignSubmitHandler}>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control rounded-pill fill"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control rounded-pill fill my-3"
                    placeholder="Email"
                    aria-label="Email"
                  />
                  <input
                    type="password"
                    className="form-control rounded-pill fill "
                    placeholder="Password"
                    aria-label="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary my-3 rounded-pill w-100 p-2 sign-up-btn">
                  Sign Up
                </button>
              </form>
            </motion.div>
            <motion.div
              className="or my-2"
              initial={{ opacity: loginForm ? `0` : `0` }}
              animate={{ opacity: loginForm ? `1` : `0` }}
              transition={{
                duration: 2,
                delay: 0.1,
              }}>
              <h6 className="text-white fw-light m-0">or</h6>
            </motion.div>
            <motion.div
              className="logWith"
              initial={{ opacity: loginForm ? `0` : `0` }}
              animate={{ opacity: loginForm ? `1` : `0` }}
              transition={{
                duration: 2,
                delay: 0.1,
              }}>
              <p className="text-white d-inline my-3"> Login With </p>
              <i className="fa-brands fa-facebook text-white m-2 fs-5"></i>
              <i className="fa-brands fa-google-plus google fs-5"></i>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="signIn w-100 d-flex justify-content-center"
          initial={{ y: loginForm ? `0` : `0` }}
          animate={{ y: loginForm ? `0` : `-57%` }}
          transition={{
            duration: 1,
          }}>
          <div
            className="overlay"
            style={{ opacity: "0.2", borderRadius: "65% 65% 0% 0%" }}></div>
          <div className="container d-flex flex-column justify-content-center align-items-center animation sign-in-main pt-4">
            <h2
              className={`text-white fw-bold mb-3 p-3 col-3 text-center ${
                loginForm ? `fs-3` : `fs-1`
              }
              ${loginForm ? `pb-4` : `pb-0`} `}
              style={{ cursor: "pointer" }}
              onClick={() => setLoginForm(false)}>
              Sign In
            </h2>
            <motion.div
              className="col-3"
              initial={{ opacity: loginForm ? `0` : `0` }}
              animate={{ opacity: loginForm ? `0` : `1` }}
              transition={{
                duration: 2,
                delay: 0.1,
              }}>
              <div className="">
                <form onSubmit={LoginSubmitHandler}>
                  <input
                    type="text"
                    className="form-control rounded-pill fill my-3"
                    placeholder="Email"
                    aria-label="Email"
                  />
                  <input
                    type="password"
                    className="form-control rounded-pill fill "
                    placeholder="Password"
                    aria-label="Password"
                  />
                  <button
                    className="btn btn-primary my-3 rounded-pill w-100 p-2"
                    type="submit">
                    Log In
                  </button>
                </form>
              </div>
            </motion.div>
            <motion.div
              className="or"
              initial={{ opacity: loginForm ? `0` : `0` }}
              animate={{ opacity: loginForm ? `0` : `1` }}
              transition={{
                duration: 2,
                delay: 0.1,
              }}>
              <h6 className="text-white fw-light">or</h6>
            </motion.div>
            <motion.div
              className="logWith"
              initial={{ opacity: loginForm ? `0` : `0` }}
              animate={{ opacity: loginForm ? `0` : `1` }}
              transition={{
                duration: 2,
                delay: 0.1,
              }}>
              <p className="text-white d-inline my-3"> Login With </p>
              <i className="fa-brands fa-facebook text-white m-2 fs-5"></i>
              <i className="fa-brands fa-google-plus google fs-5"></i>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FormLogin;
