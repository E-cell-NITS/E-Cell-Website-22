import React, { useState } from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { MdSend } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import Ip from "../User/Ip";
import axios from "axios";
import { toast } from "react-toastify";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [disablesend, setDisablesend] = useState(false);
  const isFormValid = () => {
    return email !== "";
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [checkingemail, setCheckingemail] = useState(false);

  const createUser = async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      toast.error("Please fill all the required fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a correct email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    setDisablesend(true);
    setCheckingemail(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_APIMAIN}/check-email`,
        {
          email: email,
        }
      );

      if (!response.data.unique) {
        setCheckingemail(false);
        setDisablesend(false);
        toast.warn("You have already subscribed to our newsletter", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return;
      }
    } catch (error) {
      console.log("Error checking email uniqueness:", error);
      toast.error("An error occurred while checking email uniqueness", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setCheckingemail(false);
      setDisablesend(false);
      return;
    }

    setDisablesend(true);
    axios
      .post(`${import.meta.env.VITE_REACT_APP_APIMAIN}/createUser`, {
        email,
      })
      .then((response) => {
        setEmail("");
        setCheckingemail(false);
        setDisablesend(false);
        toast.success("Subscribed to Our Newsletter.🥳", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        setEmail("");
        setCheckingemail(false);
        setDisablesend(false);
        toast.error("Something went wrong. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log("Failed to subscribe to newsletter", error);
      });
  };

  return (
    <div className="footer-section">
      <div className="fcontainer">
        <div className="container1">
          <Link to="/">
            <img
              className="img-foot-centr"
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1678341670/Ecell%20website/E-Cell-Logo-White_qhkb0q.webp"
              alt="logo"
            />
          </Link>
        </div>

        <div className="container2">
          <h2 className="h2">Organisation</h2>
          <ul className="no-bullets">
            <li>
              <BiUserCircle className="f_icon" />
              <span className="i-text">StartUp Center</span>
            </li>
            <a
              href="https://www.google.com/maps/place/Startup+Centre,+NIT+Silchar/@24.7579056,92.7889985,19z/data=!4m15!1m8!3m7!1s0x374e491f73d2d93d:0x40b0c4ddd14239f4!2sStartup+Centre,+NIT+Silchar!8m2!3d24.7577034!4d92.7895376!10e5!16s%2Fg%2F11h1klwlpg!3m5!1s0x374e491f73d2d93d:0x40b0c4ddd14239f4!8m2!3d24.7577034!4d92.7895376!16s%2Fg%2F11h1klwlpg"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              <li>
                <MdLocationOn className="f_icon" />
                <span className="i-text">
                  {" "}
                  NIT Silchar, Silchar, Assam, India-788010{" "}
                </span>
              </li>
            </a>
            <a href="mailto:ecell@nits.ac.in">
              {" "}
              <li>
                <FiMail className="f_icon" />
                <span className="i-text">ecell@nits.ac.in</span>
              </li>
            </a>
            <a href="tel:+91 9795888891">
              {" "}
              <li>
                <BsFillTelephoneFill className="f_icon" />
                <span className="i-text">+91 6388689290</span>
              </li>
            </a>
          </ul>
        </div>

        <div className="container3">
          <h2 className="h2">
            <span className="s_head">Social</span>
          </h2>
          <a
            href="https://www.facebook.com/ecell.nit.silchar?mibextid=ZbWKwL"
            className="footer_social_Logo"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaFacebook />
            <span className="i-text">Facebook</span>
          </a>
          <a
            href="https://www.linkedin.com/company/ecell-nit-silchar/"
            className="footer_social_Logo"
            id="link_ln"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin />
            <span className="i-text">Linkedln</span>
          </a>
          <a
            href="https://instagram.com/ecell.nitsilchar?igshid=YmMyMTA2M2Y="
            className="footer_social_Logo"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaInstagram className="foot_insta" />
            <span className="i-text">Instagram</span>
          </a>
        </div>

        <div className="container4">
          <h2 className="h2" id="h">
            Subscribe
          </h2>
          <p className="p1" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            Keep yourself updated. Subscribe to our newsletter
          </p>

          <form className="newsletterform00">
            <div className="fill">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <button
                disabled={disablesend}
                style={{ cursor: disablesend ? "not-allowed" : "pointer" }}
                onClick={createUser}
                className="btnnewsformletter"
              >
                <MdSend className="send" />
              </button>
            </div>
          </form>
          {checkingemail && <p>Verifying email...</p>}
        </div>
        <div className="container5">
          <p className="p2">All Rights Reserved @E-Cell, NIT Silchar </p>
          <div className="p2 mnjkl">
            Current user :{" "}
            <div className="ipdtls">
              <Ip />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
