import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Blogindi.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import NavbarTeam from "../../../components/shared/Navbar/NavbarTeam";
import Footer from "../../../components/shared/Footer/Footer";
import { Helmet } from "react-helmet";
import { IoIosArrowBack } from "react-icons/io";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillRedditCircle } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import Comments from "./Comments";
import ProgressiveBar from "./ProgressiveBar";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const Blogindividual = () => {
  const { _id } = useParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [writerpic, setWriterpic] = useState("");
  const [writerintro, setWriterintro] = useState("");
  const [topicpic, setTopicpic] = useState("");
  const [intro, setIntro] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [writername, setWritername] = useState("");
  const [writeremaill, setWriteremaill] = useState("");
  const [authoruniqueid, setAuthoruniqueid] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [readingtime, setReadingtime] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [blogId, setBlogId] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_APIMAIN}/getblogs/${_id}`
        );
        // const response = await axios.get(`http://localhost:2226/getblogs/${_id}`);
        setContent(response.data.content);
        setTitle(response.data.title);
        setWriterpic(response.data.writerpic);
        setWriterintro(response.data.writerintro);
        setTopicpic(response.data.topicpic);
        setIntro(response.data.intro);
        setWritername(response.data.writernmae);
        setTimestamp(response.data.timestamp);
        setWriteremaill(response.data.writeremail);
        setAuthoruniqueid(response.data.authorid);
        setIsPublished(response.data.status === "published");
        setBlogId(response.data._id);

        const wordsPerMinute = 183;
        const wordCount = response.data.content.split(" ").length;
        const time = Math.ceil(wordCount / wordsPerMinute);
        setReadingtime(time);
      } catch (error) {
        if (error.response && error.response.data.error === "Error fetching blog") {
          navigate("/resources/#blog_section");
          toast.error("No such Blog exists", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          console.error("Error fetching blog:", error);
        }
      }
    };

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${import.meta.env.VITE_REACT_APP_APIMAIN}/dashboard`, config)
      .then(async (response) => {
        const { role } = await response.data;
        setIsAdmin(role === "admin" || role === "superadmin");
      });
    fetchBlog();
  }, [_id, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 991) {
        const scrolled = window.pageYOffset;
        const parallaxContainer = document.querySelector(".parallax-container");
        parallaxContainer.style.transform = `translate3d(0, ${scrolled * 0.6}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  const handleBackToResorces = () => {
    navigate("/resources");
  };

  const currentURL = decodeURIComponent(window.location.origin + location.pathname);
  // console.log(currentURL)
  const handleShareToFb = () => {
    const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
    window.open(facebookShareURL, "_blank");
    // console.log(facebookShareURL);
  };

  const handleShareToReddit = () => {
    const redditShareURL = `https://www.reddit.com/submit?url=${currentURL}`;
    window.open(redditShareURL, "_blank");
  };

  const handleShareToTwitter = () => {
    const twitterShareURL = `https://twitter.com/intent/tweet?url=${currentURL}`;
    window.open(twitterShareURL, "_blank");
  };

  const handleShareToLinkedin = () => {
    const linkedinShareURL = `https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`;
    window.open(linkedinShareURL, "_blank");
  };

  const handlePublicProfile = () => {
    navigate(`/user/${authoruniqueid}`);
  };

  // console.log(blog.status );

  const handlePublish = async (id) => {
    setPublishing(true);
    if (!window.confirm("Are you sure you want to publish this blog?")) {
      setPublishing(false);
      return;
    }
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios
        .post(`${import.meta.env.VITE_REACT_APP_APIMAIN}/publishblog/${id}`, config)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Blog Published Successfully");
            setIsPublished(true);
          }
        });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setPublishing(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleting(true);
    if (!window.confirm("Are you sure you want to delete this blog?")) {
      setDeleting(false);
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios
        .delete(`${import.meta.env.VITE_REACT_APP_APIMAIN}/deleteblog/${id}`, config)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Blog Deleted Successfully");
            window.location.reload();
          }
        });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <NavbarTeam />
      <ProgressiveBar />
      <Helmet>
        <title>{title} | The E-Cell NITS Blog</title>
      </Helmet>
      <div className="topicpicimgstyled">
        <div className="parallax-container">
          <img src={topicpic} alt="" />
        </div>
      </div>
      <div className="indiviualblog">
        <h1>{title}</h1>
        {/* <p>{intro}</p> */}
        <div id="reading-author-name">
          <h6 className="dateandtimeofpost">
            Posted by{" "}
            <span onClick={handlePublicProfile} id="writerimpspan">
              {writername}{" "}
            </span>
          </h6>
          <h6>
            {" "}
            <FaClock /> {readingtime} {readingtime > 1 ? "minutes" : "minute"} read
          </h6>
        </div>
        {intro.split("\n").map((paragraph, index) => (
          <p
            key={index}
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          ></p>
        ))}

        {content.split("\n").map((paragraph, index) => (
          <p
            key={index}
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          ></p>
        ))}

        <div className="writerdetails">
          <div className="imgholderwriter">
            <img src={writerpic} alt="" />
          </div>

          <div className="writerintro">
            <h1 id="nameinwriterindiblog" onClick={handlePublicProfile}>
              {writername}
            </h1>
            {writerintro.split("\n").map((writerintro, index) => (
              <p key={index} style={{ whiteSpace: "pre-line" }}>
                {writerintro}
              </p>
            ))}
          </div>
        </div>

        <div className="bottomindiblogftr">
          <button onClick={handleBackToResorces} id="btnbacktoresoucres">
            <IoIosArrowBack />
            Back to Resources
          </button>

          <div className="smedisharetoicons">
            <button onClick={handleShareToFb}>
              <BsFacebook />
            </button>
            <button onClick={handleShareToReddit}>
              <AiFillRedditCircle />
            </button>
            <button onClick={handleShareToTwitter}>
              <BsTwitter />
            </button>
            <button onClick={handleShareToLinkedin}>
              <BsLinkedin />
            </button>
          </div>
        </div>

        {isAdmin ? (
          <div className="Admin-control">
            <button
              disabled={isPublished || publishing}
              onClick={() => handlePublish(blogId)}
            >
              {isPublished ? (
                "Published"
              ) : publishing ? (
                "Publishing..."
              ) : (
                <div>
                  {" "}
                  Publish <TiTick size="1.5rem" color="green" />{" "}
                </div>
              )}
            </button>
            <button onClick={() => handleDelete(blogId)}>
              {deleting ? "Deleting..." : "Delete"}
              <RxCross2 size="1.5rem" color="red" />
            </button>
          </div>
        ) : null}

        <Comments />
      </div>
      <Footer />
    </>
  );
};

export default Blogindividual;
