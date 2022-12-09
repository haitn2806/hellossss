import "./SuggestTour.css";
import Data from "../../data/stylelist.json";
import TourStyleCard from "../TourStyleCard/TourStyleCard";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function SuggestTour() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="wrapper-suggest">
            <div className="suggest-tour">
                <div className="suggest-title">
                    Suggested Simples Tours
                    <hr className="hrt" />
                </div>

                <p className="suggest-main">
                    The tours featured throughout our website are intended to
                    give you ideas for what's possible when you travel with us.
                    Treat them simply as inspiration, because your trip will be
                    created individually by one of our specialists to match your
                    tastes and budget.
                </p>

                <div className="blockgrid">
                    <div className="grid1">
                        <div className="itembig b1 " data-aos="flip-left">
                            <Link to={`/${Data[0].title}`}>
                                <TourStyleCard data={Data[0]} />
                            </Link>
                        </div>
                        <div className="itemsmall s1" data-aos="zoom-in">
                            <Link to={`/${Data[1].title}`}>
                                <TourStyleCard data={Data[1]} />
                            </Link>
                        </div>
                    </div>
                    <div className="grid1">
                        <div className="itemsmall s3" data-aos="flip-left">
                            <Link to={`/${Data[2].title}`}>
                                <TourStyleCard data={Data[2]} />
                            </Link>
                        </div>
                        <div
                            className="itemsmall s3"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >
                            <Link to={`/${Data[3].title}`}>
                                <TourStyleCard data={Data[3]} />
                            </Link>
                        </div>
                        <div className="itemsmall s4" data-aos="flip-left">
                            <Link to={`/${Data[4].title}`}>
                                <TourStyleCard data={Data[4]} />
                            </Link>
                        </div>
                    </div>
                    <div className="grid1">
                        <div className="itemsmall s5" data-aos="fade-up">
                            <Link to={`/${Data[5].title}`}>
                                <TourStyleCard data={Data[5]} />
                            </Link>
                        </div>
                        <div
                            className="itembig b2"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >
                            <Link to={`/${Data[6].title}`}>
                                <TourStyleCard data={Data[6]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuggestTour;