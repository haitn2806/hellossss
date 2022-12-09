import React from "react";
import "./style.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import TourCard from "../TourCard/TourCard";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../Layout";

const TourItemlist = ({ data }) => {
    const [Tourdata, setTourdata] = useState([]);
    const Datacontext = useContext(UserContext);
    let curr = Tourdata.slice(0, 10);

    const callApiTour = async () => {
        const response = await axios({
            method: "post",
            url: "http://117.6.131.222:8985/TravelAPI/AllTourTable",
            type: "json",
        });

        if (response.status === 200) {
            setTourdata(response.data.Object);
        }
    };

    useEffect(() => {
        callApiTour();
    }, [Datacontext.lang]);

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     fade: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     adaptiveHeight: true,
    //     mobileFirst: true,
    //     responsive: [
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //     ],
    // };

    return (
        // <div className={`simpletour-1 `} key={data.id}>
        //     <div className="top-container">
        //         <div className="tour-info">
        //             <div className="day-length">
        //                 <span className="day-itinerary">
        //                     <b className="day-length">
        //                         {data.itinerary.length}
        //                     </b>{" "}
        //                     <div className="day">day</div>
        //                 </span>
        //             </div>
        //             <div className="title-box">{data.title}</div>
        //         </div>
        //         <Slider {...settings}>
        //             <div className="box-1">
        //                 <img className="box-img" src={Img1} alt="" />
        //             </div>
        //             <div className="box-1">
        //                 <img className="box-img" src={Img1} alt="" />
        //             </div>
        //         </Slider>
        //         <div className="boxsub-1">
        //             <div className="title-highlight">
        //                 <ul className=" ">
        //                     {data.highlight.map((d, id) => (
        //                         <li key={id} className="content-highligt">
        //                             {d}
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //             <div className="read-more">
        //                 <div className="icon-show">
        //                     <div className="money">
        //                         <RiMoneyDollarCircleLine className="money-icon" />
        //                         <span className="tour-price">
        //                             ONLY FROM{" "}
        //                             <div className="price">{data.price}</div>
        //                             PP
        //                         </span>
        //                     </div>
        //                     <div className="tour-journeys">
        //                         <SiGooglestreetview className="journeys-map" />
        //                         <ul className="journeys-list">
        //                             <li className="location">Ha Noi</li>
        //                             <div className="icon-arrow-right">
        //                                 <BsArrowRight />
        //                             </div>
        //                             <li className="location">HaLong Bay</li>
        //                             <div className="icon-arrow-right">
        //                                 <BsArrowRight />
        //                             </div>
        //                             <li className="location">Hoi An</li>
        //                             <div className="icon-arrow-right">
        //                                 <BsArrowRight />
        //                             </div>
        //                             <li className="location">Hue</li>
        //                             <div className="icon-arrow-right">
        //                                 <BsArrowRight />
        //                             </div>
        //                             <li className="location">...</li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <hr />
        //     <div className="bottom-container">
        //         <div className="handpick">
        //             <span>Handpicked: </span>
        //             <div className="handpick-list">
        //                 <span className="handpick-title">Hotels</span>
        //                 <FaBed className="handpick-icon" />
        //             </div>
        //             <div className="handpick-list">
        //                 <span className="handpick-title">Transfer</span>
        //                 <MdTransferWithinAStation className="handpick-icon" />
        //             </div>
        //             <div className="handpick-list">
        //                 <span className="handpick-title">Meals</span>
        //                 <GiMeal className="handpick-icon" />
        //             </div>
        //             <div className="handpick-list">
        //                 <span className="handpick-title">Experiences</span>
        //                 <BsImages className="handpick-icon" />
        //             </div>
        //             <div className="handpick-list">
        //                 <span className="handpick-title">Experts</span>
        //                 <BsPeopleFill className="handpick-icon" />
        //             </div>
        //         </div>
        //         <div className="tour-explore">
        //             <Link to={`/TravelInfo/${data.id}`}>EXPLORE THIS TRIP</Link>
        //             <BsHeart className="tour-heart" />
        //         </div>
        //     </div>
        // </div>

        <div className="hot-grid hot-grid--tourlist">
            {/* <div className="hot-grid1">
                <div className="hot-box1 hot-box">
                    <TourCard data={data} />
                </div>
                <div className="hot-box1 hot-box">
                    <TourCard data={data} />
                </div>
            </div> */}
            <div className="hot-grid2">
                <div className="hot-box2 hot-box">
                    <TourCard data={data} />
                </div>
                <div className="hot-box2 hot-box">
                    <TourCard data={data} />
                </div>
                <div className="hot-box2 hot-box">
                    <TourCard data={data} />
                </div>
            </div>
        </div>
    );
};

export default TourItemlist;
