import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./Slide.css";

const slides = [
    {
        id: 1,
        title: "Top experiences for 2023",
        content:
            "Request our latest publication 'In the moment' for our specialists’ top-rated trips and experiences that you can make your own.",
        link: "REQUEST THE BROCHURE",
    },
    {
        id: 2,
        title: "Inspiration for the responsible traveller",
        content:
            "Browse trips and tips for responsible travellers who wish to leave a positive impact on your next journey.",
        link: "RESPONSIBLE TRAVEL IDEAS",
    },
    {
        id: 3,
        title: "Arrange a video appointment",
        content:
            "Our specialists can help bring your trip to life, sharing maps, images and first-hand experience.",
        link: "HOW ABOUT APPOINTMENTS WORK",
    },
    {
        id: 4,
        title: "Top experiences for 2023",
        content:
            "Request our latest publication 'In the moment' for our specialists’ top-rated trips and experiences that you can make your own.",
        link: "REQUEST THE BROCHURE",
    },
    {
        id: 5,
        title: "Inspiration for the responsible traveller",
        content:
            "Browse trips and tips for responsible travellers who wish to leave a positive impact on your next journey.",
        link: "RESPONSIBLE TRAVEL IDEAS",
    },
];

const SlideBig = () => {

    const contentStyle = {
        height: "720px",
        color: "#fff",
        lineHeight: "700px",
        textAlign: "center",
        overFlow: "hidden",
    };

    return (
        <div className="slide-boder">
            <Carousel effect="fade" autoplay duration="5s">
                {slides.map((slide,index) => (
                    <div key={index}>
                        <div
                            style={contentStyle}
                            className={`slide-item${slide.id} sli`}
                        ></div>
                        <div className="title-wellcome" key={slide.id}>
                            <span className="slide-title">{slide.title}</span>
                            <p className="slide-content">{slide.content}</p>
                            <button className="slide-link">{slide.link}</button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default SlideBig;
