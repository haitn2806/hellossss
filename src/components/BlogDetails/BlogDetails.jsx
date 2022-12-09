import React from "react";
import "./BlogDetails.css";
import { useState, useEffect } from "react";
import axios from "axios";

function BlogDetails() {
    return (
        <div className="blogDetails">
            <h1 className="blogDetails-header">Blog Detail</h1>
            <div className="blogDetails-content">
                <h2 className="bd-title">hi</h2>
                {/* {console.log(blogDetails[0].Title)} */}
                <div className="bd-img">
                    <img src="" alt="" />
                </div>
                <div className="bd-content">hi</div>
            </div>
            <div className="blogDetails-footer">
                <span className="bd-tag">Tag: </span>
                hi
            </div>
        </div>
    );
}

export default BlogDetails;