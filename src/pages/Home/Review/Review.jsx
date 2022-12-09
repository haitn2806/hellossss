import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./Review.css";

const Review = () => {
  const contentStyle = {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    textAlign: "center",
  };

  return (
    <div className="main-review">
      <div className="title-blog"> Blog </div>
      <div className="sub-title"> Tell us your story and how do you feel about?</div>
      <div className="review">
        <div className="review-main">
          <div className="review-img">
            <img src="https://th.bing.com/th/id/OIP.XqO6cETFqVBVcTHoDrdybAHaIs?pid=ImgDet&rs=1" />
          </div>
          <p>
            " Một chuyến đi tuyệt vời , trải nghiệm thú vị và vô cùng mới mẻ ,
            tôi nhất đinh sẽ quay trở lại nơi đây"
          </p>
        </div>
        <div className="review-main">
          <div className="review-img">
            <img src="https://d2lwt6tidfiof0.cloudfront.net/uploads/photo-tour/vietnam-highlights854-1389-570.jpg" />
          </div>
          <p>
            " Một chuyến đi tuyệt vời , tôi rất thích cách mà mình được trải nghiệm"
          </p>
        </div>
        <div className="review-main">
          <div className="review-img">
            <img src="https://d2lwt6tidfiof0.cloudfront.net/uploads/photo-tour/amazing-northern-vietnam720-1389-570.jpg" />
          </div>
          <p>
            " Một chuyến đi có trải nghiệm thú vị và vô cùng mới mẻ "
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
