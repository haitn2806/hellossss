import React from "react";
import { useState } from "react";

import "./Feedback.css";
import FeedbackDetail from "./FeedbackDetail/FeedbackDetail";
import FormFeebback from "./FormFeebback/FormFeebback";

function Feedback() {
    const [actbtn, setactbtn] = useState([
        "btn-active",
        "btn-normal",
    ]);

    const Picklabel = (a) => {
        setactbtn(
            actbtn.map((d, index) =>
                index === a ? (d = "btn-active") : (d = "btn-normal")
            )
        );
    };

    return (
        <div className="feedback">
            <div className="fb-banner">
                <img
                    src="https://www.commbox.io/wp-content/uploads/2019/10/48-1-1024x600.jpg"
                    alt=""
                    className="fb-banner--img"
                />
            </div>

            <div className="button-btn">
                <a
                    href="#read"
                    for="name"
                    className={actbtn[0]}
                    onClick={() => Picklabel(0)}
                >
                    FeedBack
                </a>
                <a
                    href="#write"
                    className={actbtn[1]}
                    onClick={() => Picklabel(1)}
                >
                    Write FeedBack
                </a>
            </div>

            <FeedbackDetail id="read" />
            <FormFeebback id="write"/>
        </div>
    );
}

export default Feedback;
