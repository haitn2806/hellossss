import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// import "../..//Slide.css";

// import image from "./../../../data/iamge.json";

import "./HighlightsTour.css";
import { useState } from "react";

const HighlightsTour = ({ data, id }) => {
  const [seemoreHL, setSeemoreHL] = useState("see-less")
  
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleSeemoreHL=() => {
    if (seemoreHL == "see-all") {
      setSeemoreHL("see-less");
    } else {
      setSeemoreHL("see-all");
    }
  }

  return (
    <div className="tour-highlights" id={id} data-aos="fade-up">
      <h2 className="highlight-line gold">HIGHLIGHTS OF THIS TOUR</h2>
      <div className="hightlight-content">
        <div className="mid">
          <div className="tour-highlight">
            {/* {data.map(d=> */}
            <div
              className="tour-highlight-list"
              dangerouslySetInnerHTML={{ __html: data.Hightlight }}
            >
              {/* <div>
                <BsCheck2 className="tour-highlight-check" />
              </div> */}
              {/* {d} */}
            </div>
            <div className="tour-highlight-list btn-seemoreHL">
              <button onClick={handleSeemoreHL}>See more...</button>
            </div>

            {/* )} */}

            {/* <div className="tour-highlight-list">
              <div>
                <BsCheck2 className="tour-highlight-check" />
              </div>
              Have great family moments with water puppet show and cyclo ride in
              Hanoi capital
            </div>{" "}
            <div className="tour-highlight-list">
              <div>
                <BsCheck2 className="tour-highlight-check" />
              </div>
              Have great family moments with water puppet show and cyclo ride in
              Hanoi capital
            </div>
            <div className="tour-highlight-list">
              <div>
                <BsCheck2 className="tour-highlight-check" />
              </div>
              <div>
                Introduce to your kids the World Natural Wonders – Halong Bay
                with lots of holiday activities: swimming, relaxing,
                kayaking,...
              </div>
            </div>
            <div className="tour-highlight-list">
              <div>
                <BsCheck2 className="tour-highlight-check" />
              </div>
              Enjoy Hoi An biking trip to rural villages to join a mini cooking
              class at a local family house and have fun with basket boat ride
              along Bay Mau water coconut forest
            </div>
            <div className="tour-highlight-list">
              <div>
                <BsCheck2 className="tour-highlight-check" />
              </div>
              Explore My Son Sanctuary, the ancient ruins of Cham Empire and
              also the UNESCO World Heritage Site in South-Central Vietnam
            </div>
            <div className="tour-highlight-list">
              <div>
                <BsCheck2 className="tour-highlight-check" />
              </div>
              Get kids involved in a history lesson at the legend Cu Chi tunnels
              system
            </div>
            <div className="tour-highlight-list">
              <div>
                <BsCheck2 className="tour-highlight-check" />
              </div>
              Immerse in the vibrant ambience of Saigon at night by Vespa
              motorbikes
            </div> */}
          </div>
          <div className="image-highlights">
            <img
              className="image-hl"
              data-aos="zoom-in"
              src={data.HightlightImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsTour;