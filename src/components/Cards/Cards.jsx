import React, { useState } from "react";

import "../SlideBlog/style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import img1 from "../../data/images/imgslider/demo.jpgs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import useWindowSize from "../../hooks/useWindowSize";

const txt1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore maxime eaque minus! Molestiae nesciunt blanditiis mollitia dolor quae asperiores nam earum distinctio deserunt quasi ipsa, consectetur, beatae, provident nobis.";

const txt2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

const txt3 =
  "at dolore maxime eaque minus! Molestiae nesciunt blanditiis mollitia dolor quae asperiores nam earum distinctio deserunt quasi ipsa, consectets.";

function Cards() {
  const [slide, setslide] = useState(0);
  const Slide1 = (a) => {
    setslide(a);
  };
  const { width } = useWindowSize();
  // console.log(width);
  return (
    <div className="slide-blog-container">
      <div className="maximum" style={{ height: `${width / 2}px` }}>
        <div className="mider" style={{ left: `${slide}%` }}>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
          <div
            className="mid1"
            style={{ width: `${width / 3}px`, height: `${width / 4}px` }}
          >
            <Card imgSrc={img1} btnName="EXPLORE THIS TRIP" />
          </div>
        </div>
      </div>
      <MdArrowBackIosNew onClick={() => Slide1(-33)} className="icon-react" />
      <MdArrowForwardIos onClick={() => Slide1(0)} className="icon-react" />
    </div>
  );
}

export default Cards;
