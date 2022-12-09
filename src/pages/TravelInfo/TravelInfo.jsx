import React from "react";
import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Aos from "aos";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

import "./TravelInfo.css";
import "aos/dist/aos.css";
import "antd/dist/antd.css";

import { UserContext } from "../../components/Layout";
import TravelDetail from "./TravelDetail/TravelDetail";
import ShareTrip from "./ShareTrip/ShareTrip";
import TourCard from "../../components/TourCard/TourCard";
import HighlightsTour from "./HighlightsTour/HighlightsTour";
import BlogEx from "../../components/BlogEx/BlogEx";
import BookTour from "./BookTour/BookTour";

function TravelInfo() {
    const [Tourdata, setTourdata] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [blogList, setBlogList] = useState([]);
    const User = useContext(UserContext);
    const navigate = useNavigate();
    const param = useParams();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const callApi = async () => {
        setIsLoading(true);

        const response = await axios({
            method: "post",
            url: "https://vnxpedia.3i.com.vn/TravelAPI/AllTourTable",
            type: "json",
        });

        if (response.status === 200) {
            setTourdata(response.data.Object.find((d) => d.ID == param.id));
        }
        setIsLoading(false);
    };
    console.log(Tourdata);

    const callAPIBlog = async () => {
        const response = await axios({
            method: "post",
            url: `https://vnxpedia.3i.com.vn/TravelAPI/BlogTable`,
            type: "json",
        });

        if (response.status === 200) {
            setBlogList(response.data.Object);
        }
    };

    useEffect(() => {
        callAPIBlog();
    }, [User.lang]);
    let Htl = [];
    let Paxl = [];
    {Tourdata
        &&console.log(Tourdata.FRICE)}

    
        if (Tourdata!==null && Tourdata.FRICE.length >0) {
         
    // if (Tourdata.FRICE.length >0) {
        Tourdata.FRICE.map((d) => {
            if (Htl.includes(JSON.parse(d.TourItems).Hotel) === false) {
                Htl = [...Htl, JSON.parse(d.TourItems).Hotel];
                
              
            }
            if (Paxl.includes(JSON.parse(d.TourItems).Title) === false) {
                Paxl = [...Paxl, JSON.parse(d.TourItems).Title];             
            }
        });
    }
    console.log(Paxl);
    console.log(Htl);

    useEffect(() => {
        callApi();
        let VNXuser = localStorage.getItem("VNXUser")
            ? JSON.parse(localStorage.getItem("VNXUser"))
            : null;
        if (VNXuser) {
            setCurrentUser(VNXuser);
        } else {
            setCurrentUser(null);
        }
    }, []);

    const TourLoad = {
        title: "EXPLORE VIETNAM BY TRAIN",
        description:
            "Our program plan is perfect and affordable for travelers who want to relax on the beautiful beaches from North to South Vietnam. These are all newly established beaches, but we can compare them to Hawaii Beach as Bai Chay - Ha Long City, Cua Dai Beach - Hoi An, Nha Trang Beach, and Mui Ne. In addition, you will also have the opportunity to experience and visit some famous World Heritage Sites such as Ha Long Bay, Hue Ancient Capital, and Hoi An Ancient Town.",
        destination:
            "Ha Noi - Ha Long -Hue - Da Nang- Hoi An - Nha Trang- Mui Ne -My Tho -Ho Chi Minh",
        highlight: [
            "Explore the beautiful beaches of Vietnam.",
            "Experience sea activities such as swimming, boating, and diving,...",
            "Visit famous historical sites.",
            "Enjoy delicious dishes and specialties in the countryside.",
            "Visit famous historical sites.",
            "Enjoy delicious dishes and specialties in the countryside.",
            "Visit famous historical sites.",
            "Enjoy delicious dishes and specialties in the countryside.",
            "Experience the wide range of transport in Vietnam.",
        ],
        itinerary: [
            {
                title: "Day 1: Hanoi – Arrival (D)",
                image: "https://th.bing.com/th/id/OIP.fagMVjGGH82M6zq7K0klUgHaEl?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                text: "You will be greeted when you pick you up at Noi Bai International Airport. Then our guide and driver will take you to the hotel for check-in.Afternoon: Have an inner city tour “City tour” (if time permits): Temple of Literature was built in the early 11th century and was the first university of Vietnam, Hoa Lo Prison, and Quan Thanh Temple.Overnight in Hanoi.",
            },
            {
                title: "Day 2: Hanoi - Halong Bay (B, L)",
                image: "https://th.bing.com/th/id/OIP.oS-BVvQ89_YxsqnY11ScMQHaET?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                text: "Morning: City tour: Ho Chi Minh Mausoleum (closed on Mondays, Fridays, and from October-November) and visit the place where Uncle Ho used to stay, Ho Chi Minh House, discover some places with unique architecture such as One Pillar Pagoda, Military Museum, Temple of Literature.",
            },
            {
                title: "Day 3: Halong Bay – Hanoi (B, L)",
                image: "https://th.bing.com/th/id/OIP.TANmhEP9eE9NSi7z8QiUvwHaE8?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                text: "Morning: Explore Ha Long Bay, a World Heritage Site with outstanding natural beauty. Take a scenic tour by wooden boat through the picturesque bay consisting of 3,000 limestone islands dotted with caves and grottoes in about 5 hours. Lunch with seafood dishes is available on board.",
            },
            {
                title: "Day 4: Hanoi – Bat Trang – Dong Ky – Dong Ho – Hanoi (B, L)",
                image: "https://th.bing.com/th/id/OIP.NxkRRoQ4UW4Rnr7KTC1LPgHaE7?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                text: "Morning: Transfer to Bac Ninh province to visit the traditional craft villages of Vietnam: Dong Ky village with traditional carpentry, and Dong Ho village which is famous for its excellent painting art. Drive back to Gia Lam to visit Bat Trang pottery village and experience pottery making.",
            },
        ],
        inclusions: [
            "•	Hotel accommodation & daily breakfast",
            "•	Hotel accommodation & daily breakfast",
            "•	Entrance fee and private boat trip",
            "•	Hotel accommodation & daily breakfast",
            "•	Hotel accommodation & daily breakfast",
            "•	Entrance fee and private boat trip",
        ],
        exclusions: [
            "•	All international airport taxes",
            "•	International flights & Domestic flights",
            "•	Early check-in and Late checkout",
            "•	All international airport taxes",
            "•	International flights & Domestic flights",
            "•	Early check-in and Late checkout",
        ],
        hotel: [
            "•	Ha Noi: Medalion Hotel",
            "•	Hue: Asia Hue hotel",
            "•	Hoi An: Lotus Hotel",
            "•	Ha Noi: Medalion Hotel",
            "•	Hue: Asia Hue hotel",
            "•	Hoi An: Lotus Hotel",
        ],
    };

    const [showf, setshowf] = useState(["none", "none"]);
    const ShowInquire = (a) => {
        // if (currentUser == null) {
        //     navigate("/LogIn", { replace: true });
        // }

        a === 1 ? setshowf(["block", "none"]) : setshowf(["none", "block"]);
    };
    const Close = () => {
        setshowf(["none", "none"]);
    };

    const [actbtn, setactbtn] = useState([
        "btn-active",
        "btn-normal",
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

    return (
        <div className="wrapper">
            {Tourdata !== null && (
                <div>
                    <div className="banner-info">
                        <div className="banner-img-travelinfo">
                            <img
                                className="ban-img"
                                src={Tourdata.BannerImg}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="tour-address">
                        <div className="travel-intro">
                            <h1 className="travel-title">
                                {Tourdata.TourName}
                            </h1>
                            <img
                                className="img-truly"
                                src="https://th.bing.com/th/id/R.4e72204c5757d40f44f19600d78182a7?rik=0nNra49T%2fAc9FQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2f6Tr5EaG7c.jpg&ehk=b1OAt7oiobJ%2f9e%2b6j60rhMukzFAsWyMGHOL5GWwbDJ4%3d&risl=&pid=ImgRaw&r=0"
                                alt=""
                            />
                        </div>

                        <div className="button-btn">
                            <a
                                href="#high"
                                className={actbtn[1]}
                                onClick={() => Picklabel(1)}
                            >
                                Highlight
                            </a>
                            <a
                                href="#itin"
                                className={actbtn[2]}
                                onClick={() => Picklabel(2)}
                            >
                                Itinerary
                            </a>
                            <a
                                href="#incl"
                                className={actbtn[3]}
                                onClick={() => Picklabel(3)}
                            >
                                Inclusion
                            </a>
                            <a
                                href="#enqi"
                                className={actbtn[4]}
                                onClick={() => Picklabel(4)}
                            >
                                Enquire
                            </a>
                            <a
                                href="#revi"
                                className={actbtn[0]}
                                onClick={() => Picklabel(0)}
                            >
                                Review
                            </a>
                        </div>

                        <div className="travel-local">
                            <div className="local-list">
                                <BiMap className="local-icon" />
                                <p
                                    className="paragraph"
                                    dangerouslySetInnerHTML={{
                                        __html: Tourdata.Destination,
                                    }}
                                ></p>
                            </div>
                            <p
                                className="gold tour-dct"
                                dangerouslySetInnerHTML={{
                                    __html: Tourdata.TourDescription,
                                }}
                            ></p>

                            <HighlightsTour data={Tourdata} id="high" />
                            <TravelDetail data={Tourdata} id="itin" />
                        </div>
                    </div>

                    <div className="your-choice">
                        <div className="enquire-main">
                            <div className="tour-choice">
                                <div className="hotel-div-container">
                                    <h1 className="gold hotel-gold">HOTEL</h1>
                                    <div className="hotel-container">
                                        <div
                                            className="hotel-content"
                                            dangerouslySetInnerHTML={{
                                                __html: Tourdata.Hotel,
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="tour-choice--detail" id="incl">
                                    <ul className="ul-1" data-aos="fade-up">
                                        <div className="tour-option-re">
                                            <p>Inclusion</p>
                                        </div>
                                        {/* {TourLoad.inclusions.map((d) => (
                                            <li>{d}</li>
                                        ))} */}
                                        <div dangerouslySetInnerHTML={{
                                                __html: Tourdata.Inclusions,
                                            }}></div>
                                    </ul>

                                    <ul data-aos="fade-up" className="ul-1">
                                        <div className="tour-option-re">
                                            <p>Exclusion</p>
                                        </div>
                                        {/* {TourLoad.exclusions.map((d) => (
                                            <li>{d}</li>
                                        ))} */}
                                        <div dangerouslySetInnerHTML={{
                                                __html: Tourdata.Exclusions,
                                            }}></div>
                                    </ul>
                                </div>
                            </div>

                            <div className="hotel-book" id="enqi">
                                <div className="hotel-list">

                             {Tourdata.FRICE.length>0&&  
                                <table className="table-hotel">
                                <tr>
                                <th>Hotel</th>
                                {Paxl.length>0&&Paxl.map(d=><th>{d}</th>)}
                                     </tr>
                                {Htl.length>0&&Htl.map((d,index)=><tr>
                                <td className="td-ht">{d}</td>
                                 {Paxl.length>0&&Paxl.map((a,i)=><td>
                                    {Tourdata.FRICE[i+index*Paxl.length].price} 
                                    $</td>)}
                               </tr>
                               )
                               }
                                 </table>}
                                
                            {/* {Tourdata.FRICE.length>0&&
                            <table className="table-hotel">
                             <tr>
                             <th>Hotel</th>
                             {Paxl.length>0&&Paxl.map(d=><th>{d}</th>)}
                                  </tr>
                             {Htl.length>0&&Htl.map((d,index)=><tr>
                             <td className="td-ht">{d}</td>
                              {Paxl.length>0 && Paxl.map((a,i)=><td>{Tourdata.PRICE[i+index*Paxl.length].price} $</td>)}
                            </tr>)}
                              </table>} */}

                                </div>

                                <div className="tailormade">
                                    <div className="tailormade-team">
                                        <div className="tailormade-img">
                                            <div className="tailormade-title">
                                                We can customize this tour just
                                                for you
                                            </div>
                                        </div>
                                        <div className="link-list">
                                            <p
                                                className="link-custom"
                                                onClick={() => ShowInquire(1)}
                                            >
                                                <AiOutlineMail className="tailormade-mail" />
                                                ENQUIRE AND CUSTOM
                                            </p>
                                            <p
                                                className="link-share"
                                                onClick={() => ShowInquire(2)}
                                            >
                                                SHARE WITH YOUR FRIEND
                                            </p>
                                        </div>

                                        <p>
                                            We'll get back to you within 8 - 12
                                            business hours
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* {Tourdata.FRICE.length>0&& */}
                    <BookTour onClick={Close} status={showf[0]} data={Tourdata} htl={Htl} paxl={Paxl} user={currentUser}/>
            {/* } */}
                    
                    <ShareTrip
                        onClick={Close}
                        status={showf[1]}
                        data={Tourdata}
                    />

                    <h1 className="h1-normal">OTHER TOURS YOU MAY LIKE</h1>
                    <div className="list-tour-relate">
                        <div className="list-main" id="tour">
                            <div className="tour-item-country">
                                <TourCard data={Tourdata} />
                            </div>
                            <div className="tour-item-country">
                                <TourCard data={Tourdata} />
                            </div>
                            <div className="tour-item-country">
                                <TourCard data={Tourdata} />
                            </div>
                        </div>
                    </div>

                    <h1 className="h1-normal">TRAVEL GUIDES & INSPIRATIONS</h1>
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
            )}
        </div>
    );
}

export default TravelInfo;
