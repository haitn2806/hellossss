import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

const TourCard = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  

  return (
    <div className="tour-card-container" data-aos="fade-up">
      <div className="tour-img-container">
        <img
          alt=""
          src={data.BannerImg}
          className="img-card"
        />
      </div>
      
      <Link to={`/TravelInfo/${data.ID}`}>
        <div className="tour-card-main">
          <h2 className="h2 gold">{data.TourName}</h2>
        
          <p className="white normal">Travel Duration:  day</p>
          <p className="white normal">
            Starting at $ per person
          </p>
          {/* {data.FRICE[0].price} */}
        </div>
      </Link>
    </div>
  );
};

export default TourCard;
