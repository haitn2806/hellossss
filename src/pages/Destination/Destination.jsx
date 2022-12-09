import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "antd";
import axios from "axios";

import { UserContext } from "../../components/Layout";
import TourCard from "../../components/TourCard/TourCard";
import BlogEx from "../../components/BlogEx/BlogEx";
import IMG from "../../data/images/banner/33.jpg";

import "./style.css";
import "antd/dist/antd.css";

const Vietnam = () => {
    const param = useParams();
    const Datacontext = useContext(UserContext);
    const [Tourdata, setTourdata] = useState([]);
    const [Destinationdata, setDestinationdata] = useState(null);
    const [Localist, setLocalist] = useState([]);
    const [blogList, setBlogList] = useState([]);
    const [Locacurrent, setLocacurrent] = useState(0);
    console.log(Datacontext.lang);
    console.log(param.id);
    console.log(param.id.toLowerCase().replace('_destination',''));
    const callApiDestination = async () => {
        const response = await axios({
            method: "post",
            url: `https://vnxpedia.3i.com.vn/TravelAPI/GetAllCountry?language=${Datacontext.lang}`,
            type: "json",
        });

        if (response.status === 200) {
            setDestinationdata(
                response.data.find((d) => d.hash_tag === `["#${param.id}"]`)
            );
        }
    };
    const callApiTour = async () => {
        const response = await axios({
            method: "post",
            url: "https://vnxpedia.3i.com.vn/TravelAPI/AllTourTable",
            type: "json",
        });

        if (response.status === 200) {
            setTourdata(response.data.Object.filter(d=>d.Country.toLowerCase().includes(param.id.toLowerCase().replace('_destination',''))));
        }
    };
    const callApiLocation = async () => {
        const response = await axios({
            method: "post",
            url: `https://vnxpedia.3i.com.vn/TravelAPI/GetItemLocation?language=en_US&hastag=${param.id}`,
            type: "json",
        });

        if (response.status === 200) {
            setLocalist(response.data);
        }
    };

    const callAPIBlog = async () => {
        const response = await axios({
            method: "post",
            url: `https://vnxpedia.3i.com.vn/TravelAPI/BlogTable?CurrentPage=1`,
            type: "json",
        });

        if (response.status === 200) {
            setBlogList(response.data.Object);
        }
    };

    useEffect(() => {
        callApiDestination();
        callApiTour();
        callApiLocation();
        callAPIBlog();
    }, [Datacontext.lang, param.id]);

    ////////xử lí button menu
    const [actbtn, setactbtn] = useState([
        "btn-active",
        "btn-normal",
        "btn-normal",
        "btn-normal",
    ]);
    const Picklabel = (a) => {
        setactbtn(
            actbtn.map((d, index) =>
                index === a ? (d = "btn-active") : (d = "btn-normal")
            )
        );
    };

    let curr = Tourdata.slice(0, 10);
    const [current, setCurrent] = useState(Tourdata.slice(0, 10));
    const onChangePag = (page) => {
        setCurrent(Tourdata.slice((page - 1) * 10, page * 10));
        curr = Tourdata.slice((page - 1) * 10, page * 10);
    };

    return (
        <div>
            {Destinationdata != null ? (
                <div>
                    <div className="header-vietnam">
                        <div className="top-body">
                            <img
                                className="image-des"
                                alt=""
                                src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2022/02/USE_Ha-Long-Bay-Vietnam_Credit_GettyImages-1182620587.jpg?w=2200&h=880&crop=1"
                            />
                        </div>
                        <div className="text-head">
                            Wellcome to {Destinationdata.title}
                        </div>
                    </div>

                    <div className="are-main">
                        <div className="page-up">
                            <div className="title-top">
                                {Destinationdata.title}
                            </div>
                            <div className="middle-page">
                                {Destinationdata.intro_text}
                            </div>
                            <img
                                alt=""
                                className="img-title"
                                src="https://th.bing.com/th/id/OIP.Ug0n_kg9MrGaEZfw6mIpJQHaCm?pid=ImgDet&w=1920&h=676&rs=1"
                            ></img>
                        </div>
                    </div>

                    {/* Button */}

                    <div className="button-btn">
                        <a
                            href="#tour"
                            for="name"
                            className={actbtn[0]}
                            onClick={() => Picklabel(0)}
                        >
                            Tour
                        </a>
                        <a
                            href="#about"
                            className={actbtn[1]}
                            onClick={() => Picklabel(1)}
                        >
                            About
                        </a>
                        <a
                            href="#location"
                            className={actbtn[2]}
                            onClick={() => Picklabel(2)}
                        >
                            Destination
                        </a>
                        <a
                            href="#exp"
                            className={actbtn[3]}
                            onClick={() => Picklabel(3)}
                        >
                            Insprirations
                        </a>
                    </div>

                    <div className="list-tour-country">
                        <h1>Best tours of {Destinationdata.title}</h1>
                        <p className="p-under-title">
                            These {Destinationdata.title} Tours bring you
                            alluring terraced rice fields, outstanding panoramic
                            scenery, emerald water beaches, authentic heritage
                            retreats and picturesque outdoor adventures. They
                            cover off-the-beaten-track routes and feature the
                            top best accommodation to stay in. Treat them as
                            inspiration, as each trip is created uniquely for
                            you.
                        </p>
                        <div className="list-main" id="tour">
                            {Tourdata.length > 0 &&
                                curr.map((d) => (
                                    <div className="tour-item-country">
                                        <TourCard data={d} />
                                    </div>
                                ))}
                        </div>
                        <Pagination
                            className="list-tour--item"
                            defaultCurrent={1}
                            total={Tourdata.length}
                            onChange={onChangePag}
                        />
                    </div>

                    <h1 id="about">
                        What is attractive in {Destinationdata.title}
                    </h1>
                    <p className="p-under-title">
                        With more than 10 years in creating bespoke journeys for
                        our amazing customers, our experts always focus on the
                        quality of {Destinationdata.title} Tours to bring the
                        unforgettable authentic travel experience and highlights
                        of destinations to travellers.
                    </p>
                    <div className="country-infor">
                        <div className="country-img">
                            <img src={IMG} alt="" className="ct-img"></img>
                        </div>
                        <div className="country-infor-main">
                            <div
                                className="country-about"
                                dangerouslySetInnerHTML={{
                                    __html: Destinationdata.full_text,
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className="country-place">
                        <h1 id="location">Hot places of {Destinationdata.title}</h1>

                        <div className="picture-region">
                            {Localist.length > 0 &&
                                Localist.map((d, index) => (
                                    <div
                                        className="a000001 s1"
                                        key={Localist.index}
                                        onClick={() => setLocacurrent(index)}
                                    >
                                        {d.title}
                                    </div>
                                ))}
                        </div>
                    </div>

                    {Localist.length > 0 && (
                        <div>
                            <h1>{Localist[Locacurrent].title}</h1>
                            <p className="p-under-title">
                                {Localist[Locacurrent].intro_text}
                            </p>
                            <div className="country-infor">
                                <div className="country-img">
                                    <img
                                        src="https://th.bing.com/th/id/OIP.kCqaI8re0JDfsR1Umn984wHaE7?pid=ImgDet&rs=1"
                                        className="ct-img"
                                        alt=""
                                    ></img>
                                </div>
                                <div className="country-infor-main">
                                    <div
                                        className="country-about"
                                        dangerouslySetInnerHTML={{
                                            __html: Localist[Locacurrent]
                                                .full_text,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <h1 id="exp" className="tittle-insprirations">{Destinationdata.title} TRAVEL GUIDES & INSPIRATIONS</h1>

                    {blogList.length > 0 && (
                        <div className="blog-list-des-vn" key={blogList.index}>
                            <div className="blog-des">
                                {blogList.slice(1, 4).map((d) => (
                                    <div className="des-blog">
                                        <BlogEx data={d} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Vietnam;
