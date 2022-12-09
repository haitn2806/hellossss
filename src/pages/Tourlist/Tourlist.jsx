import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../components/Layout";
import axios from "axios";

import "./TravelStyle.css";
import BlogEx from "../../components/BlogEx/BlogEx";
import Style from "../../data/stylelist.json";
import TourCard from "../../components/TourCard/TourCard";
import { callApiTourTable } from "../../api/Tour";
import { callAPIBlogCurrentPage } from "../../api/Blog";

const Tourlist = () => {
    const param = useParams();
    const [blogList, setBlogList] = useState([]);
    const [tourList, setTourList] = useState([]);
    const Datacontext = useContext(UserContext);

    const Styleload = Style.find((d) => d.title === param.id);

   const callApiTour =async () =>{
           try {
                const {data} = await callApiTourTable()
                setTourList(data.Object);
           } catch (error) {
             console.log(error);
           }
   }

   const callAPIBlog =async()=>{
    try {
        const {data} = await callAPIBlogCurrentPage()
        setBlogList(data.Object);
   } catch (error) {
     console.log(error);
   }
   }

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

    useEffect(() => {
        callApiTour();
        callAPIBlog();
    }, [Datacontext.lang, param.id]);
    console.log(tourList);

    const Tourstyle = tourList.filter(d=>d.TourType.toLowerCase().includes(param.id.toLowerCase()));
    console.log(param.id);
    console.log(Tourstyle);

    return (
        <div className="body-classic">
            <div className="banner-picture">
                <div className="title-travelstyle">{Styleload.title}</div>
            </div>
            <div className="are-main">
                <div className="page-up">
                    <div className="title-top"> See The World Together</div>
                    <div className="middle-page">{Styleload.content}</div>
                    <div className="end-page">
                        {" "}
                        Look By Eyes- Feel By Heart{" "}
                    </div>
                </div>

                <div className="button-btn">
                    <a
                        href="#about"
                        for="name"
                        className={actbtn[0]}
                        onClick={() => Picklabel(0)}
                    >
                        About
                    </a>
                    <a
                        href="#tour"
                        className={actbtn[1]}
                        onClick={() => Picklabel(1)}
                    >
                        Tour
                    </a>
                    <a
                        href="#exp"
                        className={actbtn[2]}
                        onClick={() => Picklabel(2)}
                    >
                        Insprirations
                    </a>
                </div>

                <div className="list-main" id="tour">
                    {Tourstyle.length > 0 &&
                        Tourstyle.map((d) => (
                            <div
                                className="tour-item-country"
                                key={Tourstyle.id}
                            >
                                <TourCard data={d} />
                            </div>
                        ))}
                </div>
            </div>

            <h1 id="exp" className="blog-travelstyle">
                TRAVEL GUIDES & INSPIRATIONS
            </h1>
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
    );
};

export default Tourlist;


 // const callApiTour = async () => {
    //     const response = await axios({
    //         method: "post",
    //         url: "https://vnxpedia.3i.com.vn/TravelAPI/AllTourTable",
    //         type: "json",
    //     });

    //     if (response.status === 200) {
    //         setTourList(response.data.Object);
    //     }
    // };

    // const callAPIBlog = async () => {
    //     const response = await axios({
    //         method: "post",
    //         url: `https://vnxpedia.3i.com.vn/TravelAPI/BlogTable?CurrentPage=1`,
    //         type: "json",
    //     });

    //     if (response.status === 200) {
    //         setBlogList(response.data.Object);
    //     }
    // };