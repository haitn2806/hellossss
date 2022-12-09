import React, { useState } from "react";
import "./style.css";
import useWindowSize from "../../hooks/useWindowSize";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import Slide from "../Slide/Slide";

const Slideblog = () => {
  // const [slide, setslide] = useState(0);
  // const Slide1 = (a) => {
  //   setslide(a);
  // };
  const { width } = useWindowSize();
  // console.log(width);

  return (
    <div className="slide-blog-container">
      <h1 className="slide-blog-title">Travel inspiration from out blog</h1>
      <p className="slide-blog-p">
        Home to some of the world's most ancient cultures and captivating
        destinations, Asia is a wonderful land of diverse beauty and uniqueness
        that offers a variety of dreamy journeys for every type of traveler.
      </p>
      {/* <img
        style={{ width: `${width / 2.2}px`, height: `${width / 6.2}px` }}
        className="img-blog"
        src="https://thumbs.dreamstime.com/b/vector-silhouette-old-people-white-background-46644804.jpg"
        alt=""
      /> */}
      <br />
      <Slide className="slide" />
      <div className="blog-seemore">
        <Link to="/Blog">See more</Link>
      </div>
    </div>
  );
};

export default Slideblog;
