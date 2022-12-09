import React from "react";
import "./Blog.css";
import BlogEx from "../../components/BlogEx/BlogEx";
import { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
    const [blogDetails, setBlogDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [Tag, setTag] = useState("TYPE_CLASSIC");
    const [activeBtn, setActiveBtn] = useState([
        "button-active",
        "button-blog",
        "button-blog",
        "button-blog",
        "button-blog",
        "button-blog",
        "button-blog",
        "button-blog",
        "button-blog",
        "button-blog",
        "button-blog",
        "button-blog",
        "button-blog",
    ]);

    const PickTag = (e, x) => {
        setTag(e.target.value);
        let new1 = activeBtn;
        const new2 = new1.map((d, index) =>
            index === x ? (d = "button-active") : "button-blog"
        );
        setActiveBtn(new2);
    };

    const callApi = async () => {
        setIsLoading(true);
        const response = await axios({
            method: "post",
            url: `https://vnxpedia.3i.com.vn/TravelAPI/BlogTable?tag=${Tag}`,
            type: "json",
        });

        setBlogDetails(response.data.Object);
    };

    useEffect(() => {
        callApi();
    }, [Tag]);

    return (
        <div className="main-blog">
            <div className="top-blog">
                <div className="blog-container">
                    <div className="midlle-topblog">
                        <img
                            className="image-blog"
                            alt="button-blog"
                            src="https://cdn.shopify.com/s/files/1/0165/7044/files/about_image.png?v=1666053558"
                        />
                    </div>

                    <div className="bot-topblog">
                        <div className="title-blogmain">Blog</div>
                        <div className="bottom-title">
                            {" "}
                            VNXpedia - Travel all the world{" "}
                        </div>
                        <div className="text-area">
                            Sibella Court is a creative director, interior &
                            product designer, television presenter, author &
                            founder of the The Society inc , a design company,
                            online hardware emporium and purveyor of home goods.{" "}
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle-blog">
                <div className="tag-choice">
                    <div className="layer-middle">
                        <button
                            className={activeBtn[0]}
                            value="TYPE_CLASSIC"
                            onClick={(e) => PickTag(e, 0)}
                        >
                            CLASSIC
                        </button>
                        <button
                            className={activeBtn[1]}
                            value="TYPE_FAMILY"
                            onClick={(e) => PickTag(e, 1)}
                        >
                            FAMILY{" "}
                        </button>
                        <button
                            className={activeBtn[2]}
                            value="TYPE_BEACH"
                            onClick={(e) => PickTag(e, 2)}
                        >
                            BEACH{" "}
                        </button>
                        <button
                            className={activeBtn[3]}
                            value="TYPE_SHORTTRIPS"
                            onClick={(e) => PickTag(e, 3)}
                        >
                            SHORT TRIPS{" "}
                        </button>
                        <button
                            className={activeBtn[4]}
                            value="TYPE_CULINARY"
                            onClick={(e) => PickTag(e, 4)}
                        >
                            CULINARY{" "}
                        </button>
                        <button
                            className={activeBtn[5]}
                            value="TYPE_ADVENTURE"
                            onClick={(e) => PickTag(e, 5)}
                        >
                            ADVENTURE{" "}
                        </button>
                        <button
                            className={activeBtn[6]}
                            value="TYPE_CRUISES"
                            onClick={(e) => PickTag(e, 6)}
                        >
                            CRUISES{" "}
                        </button>
                        <button
                            className={activeBtn[7]}
                            value="TYPE_GOLF"
                            onClick={(e) => PickTag(e, 7)}
                        >
                            GOLF{" "}
                        </button>
                        <button
                            className={activeBtn[8]}
                            value="TYPE_WELLES"
                            onClick={(e) => PickTag(e, 8)}
                        >
                            WELLES{" "}
                        </button>
                        <button
                            className={activeBtn[9]}
                            value="TYPE_M.I.C.E"
                            onClick={(e) => PickTag(e, 9)}
                        >
                            M.I.C.E{" "}
                        </button>
                        <button
                            className={activeBtn[10]}
                            value="TYPE_LUXURY"
                            onClick={(e) => PickTag(e, 10)}
                        >
                            LUXURY{" "}
                        </button>
                        <button
                            className={activeBtn[11]}
                            value="TYPE_HERITAGES"
                            onClick={(e) => PickTag(e, 11)}
                        >
                            HERITAGES{" "}
                        </button>
                        <button
                            className={activeBtn[12]}
                            value="TYPE_REPONSIBLETRAVEL"
                            onClick={(e) => PickTag(e, 12)}
                        >
                            REPONSIBLE TRAVEL{" "}
                        </button>
                    </div>
                </div>
                <div className="blog-list-des">
                    <h1>BLOG for {Tag.replace("TYPE_", "")}</h1>
                    <div className="layerblog">
                        {" "}
                        {blogDetails.length > 0 &&
                            blogDetails.map((d) => (
                                <div className="blog-item-container">
                                    <BlogEx data={d} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="bottom-blog"></div>
        </div>
    );
};

export default Blog;