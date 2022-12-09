import React from "react";
import "./CustomerFeedback.css";
import DataFb from "./DataFeedback/DataFb";
const CustomerFeedback = () => {
    return (
        <div>
            <div className="pagefb">
                <div className="title-fb"> Work with Us in My Enviroment</div>
                <p>
                    With a creative eye for originality and authenticity we
                    develop content campaigns cross-platform, so that clients
                    can feel assured of success when working with us. We offer
                    content campaigns for brands and tourism boards, social
                    media marketing, product photography, modelling and brand
                    partnerships. In the past we worked with brands and
                    organisations like OnePlus, Booking.com, GoPro, Teva,
                    Tourism Boards of Oman, Indonesia, Sri Lanka, and Myanmar.
                </p>
                <p>
                    You will reach a highly targeted travel audience with a
                    combined interest in photography, environmental awareness or
                    fashion.
                </p>
                <h1>Contact Us</h1>
                <p>
                    <b>
                        We can help market your brand with authenticity and
                        creativity.
                    </b>{" "}
                    Please contact us for more information or to request our
                    media kit.
                </p>
                <div className="inputname"> Name :</div>
                <input type="text"></input>
                <div className="inputname"> Email :</div>
                <input type="text"></input>
                <div className="inputname"> Message :</div>
                <textarea
                    type="text"
                    id="message"
                    className="media-content"
                ></textarea>
                <div className="inputname"> Agreement : </div>
                <div className="media-check">
                    <input type="checkbox" id="checkbox"></input>
                    <span>
                        I understand Salt in our Hair will not respond to GUEST
                        POST requests.
                    </span>
                </div>
                <button className="button">Submit</button>
            </div>
            {/* <div className="somefeedback">
                {" "}
                This is some feeback: look at that and see.
            </div>
            <DataFb/> */}
            <div className="bottom-feed">
                <h1>
                    {" "}
                    “Their mastery of photography, design, and social media, as
                    well as their fun personality, made our collaboration more
                    pleasure and less work!”
                </h1>
                <h2>
                    <b>Moroccan National Tourism Office</b> - Social Media Team
                </h2>
                <a href="/"> Read more about us</a>
            </div>
        </div>
    );
};

export default CustomerFeedback;
