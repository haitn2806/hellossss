import "./BlogDetails.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { callAPIBlogTable } from "../../api/Blog";

function BlogDetails() {
    const [blogDetails, setBlogDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const param = useParams();
    const BlogLoad = blogDetails.find((d) => d.Id == param.id);


    useEffect(() => {
       const callApi =async()=>{
           try {
           const {data} = await callAPIBlogTable()
           console.log(data);
           setBlogDetails(data.Object)
           } catch (error) {
            console.log(error);
           }
        }
       callApi()
    }, []);

    console.log("blog>>>",blogDetails);

    return (
        <div>
            {BlogLoad && (
                <div className="blogdetails-container">
                    <div className="blogdetails-bannerimg">
                        <img
                            className="blogdetails-banner-img"
                            src={BlogLoad.Image}
                            alt="BannerImage"
                        />
                    </div>

                    <div className="blogdetail-title">
                        <h1 className="jjs-title">{BlogLoad.Title}</h1>
                    </div>

                    <div className="blogdetails-content-container">
                        {BlogLoad.Detail}
                    </div>
                    <hr />
                </div>
            )}
        </div>
    );
}

export default BlogDetails;
