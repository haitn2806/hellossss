import React from "react";
import "./BlogEx.css";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogEx = ({ data }) => {
    return (
        <div className="blog-card-container" key={data.Id}>
            <h2 className="blog-title blog-card-main">{data.Title}</h2>
            <div className="blog-img-container">
                <img alt="" src={data.Image} className="img-card" />
            </div>
            <div className="blog-seemore blog-card-main">
                <p className="derc"> {data.Detail}</p>
                <div className="btn">
                    <Link className="btn-more" to={`/BlogDetails/${data.Id}`}>
                        SEE MORE ...
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogEx;