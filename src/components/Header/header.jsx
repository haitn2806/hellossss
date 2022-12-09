import React, { useEffect, useState, useContext } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import "./header.css";
import { UserContext } from "../Layout";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaSearchLocation, FaPhoneAlt } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Search from "../Find/Search";
import Buttontop from "../ButtonTop/Buttontop";
import Logo from "./logo-alt.png";
import MobileMenu from "./MobileMenu";
import OutsideClickHandler from "react-outside-click-handler";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Header = () => {
    const {t} = useTranslation()
    const{i18n} = useTranslation();
    const changeLng =(lng)=>{
        i18n.changeLanguage(lng)
    }
    const [Destinationdata, setDestinationdata] = useState([]);
    const user = useContext(UserContext);
    const [User, setUser] = useState(user);
    const [currentUser, setCurrentUser] = useState(null);

    const callApi = async () => {
        const response = await axios({
            method: "post",
            url: `https://vnxpedia.3i.com.vn/TravelAPI/GetAllCountry?language=${user.lang}`,
            type: "json",
        });

        if (response.status === 200) {
            setDestinationdata(response.data);
        }
    };
    useEffect(() => {
        callApi();
    }, []);

    const [showfind, setshowfind] = useState("hidden");
    const [showlog, setshowlog] = useState("hidden");

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleLogout = () => {
        User.change(null);
        localStorage.removeItem("VNXUser");
        navigate("/", { replace: true });
    };
    //design link active
    const handleActive = ({ isActive }) => {
        return isActive && "active";
    };

    // Show-hide Log and Search
    const ShowFind = () => {
        if (showfind === "show") {
            setshowfind("hidden");
        } else setshowfind("show");
    };
    const Showlog = () => {
        showlog === "show" ? setshowlog("hidden") : setshowlog("show");
    };
    // Show menu mobile
    const [showmobile, setshowmobile] = useState("none");
    const Showlist = () => {
        showmobile === "none" ? setshowmobile("block") : setshowmobile("none");
    };
    const CloseMobile = () => {
        setshowmobile("none");
    };

    const [showlayout, setshowlayout] = useState("show");
    
    useEffect(() => {
        let VNXuser = localStorage.getItem("VNXUser")
      ? JSON.parse(localStorage.getItem("VNXUser"))
      : null;
    if (VNXuser) {
      setCurrentUser(VNXuser);
    } else {
      setCurrentUser(null);
    }
        setUser(user);

        location.pathname === "/LogIn" || location.pathname === "/SignUp"
            ? setshowlayout("hidden")
            : setshowlayout("show");
    }, [location]);
   

    console.log(User);

    return (
        <div className="container">
        <div className={`header ${showlayout}`}>
            <div className="header-bot">
                <Link to="/" className="link-home">
                    <img src={Logo} alt=""/>
                </Link>
                <div className="menu">
                    <div className="menu-li" id="list1">
                        <NavLink id={handleActive} className="link-f">
                            {t("Destination")}
                        </NavLink>
                        <IoIosArrowDown className="icon-arrow" />
                        <div className="list-hidden list-1">
                            {Destinationdata.length > 0 &&
                                Destinationdata.map((d) => (
                                    <Link
                                        to={`/Destination/${d.hash_tag
                                            .replace('["#', "")
                                            .replace('"]', "")}`}
                                    >
                                        {d.title}
                                    </Link>
                                ))}
                        </div>
                    </div>
                    <div className="menu-li">
                        <NavLink id={handleActive} className="link-f">
                            {t("travel Styles")}
                        </NavLink>
                        <IoIosArrowDown className="icon-arrow" />
                        <div className="list-hidden list-2">
                            <Link to="/Classic">CLASSIC</Link>
                            <Link to="/Family">FAMILY</Link>
                            <Link to="/Beach">BEACH</Link>
                            <Link to="Short trip">SHORT TRIPS</Link>
                            <Link to="Culinary">CULINARY</Link>
                            <Link to="Adventure">ADVENTURE</Link>
                            <Link to="Cruise">CRUISES</Link>
                        </div>
                    </div>

                    <div className="menu-li">
                        <NavLink id={handleActive} className="link-f">
                            {t("Special Deals")}
                        </NavLink>
                        <IoIosArrowDown className="icon-arrow" />
                        <div className="list-hidden list-3">
                            <Link to="/Golf">GOLF</Link>
                            <Link to="/Welles">WELLES</Link>
                            <Link to="/Mice">M.I.C.E</Link>
                            <Link to="/Luxury">LUXURY</Link>
                            <Link to="/Heritage">HERITAGES</Link>
                            <Link to="/Reponsible">REPONSIBLE TRAVEL</Link>
                        </div>
                    </div>
                    <div className="menu-li">
                        <NavLink
                            to="/TripFinder"
                            id={handleActive}
                            className="link-f"
                        >
                            {t("Trip Finder")}
                        </NavLink>
                    </div>
                    <div className="menu-li">
                        <NavLink  id={handleActive} className="link-f">
                           {t("Company")}
                        </NavLink>
                        <IoIosArrowDown className="icon-arrow" />
                        <div className="list-hidden list-4">
                            <Link to="/AboutUs">ABOUT US</Link>
                            <Link to="/Policy">POLICY</Link>
                            <Link to="/Privacy">PRIVACY</Link>
                            <Link to="/Payment">PAYMENT GATEWAY</Link>
                            <Link to="../Affiliates">AFFILIATES</Link>
                        </div>
                     
                    </div>
                    <div className="menu-li">
                        <NavLink

                            id={handleActive}
                            className="link-f"
                        >
                            {t("Media")}
                        </NavLink>
                        <IoIosArrowDown className="icon-arrow" />
                        <div className="list-hidden list-2">
                            <Link to="/Blog">BLOG</Link>
                            <Link to="/Feedback">FEEDBACK</Link>
                        </div>
                    </div>
                </div>

                <div className="change-language">
                    <div className="p-click-lang">
                        <p className="white lang-title ">{t("Language")}</p>
                        <IoIosArrowDown className="icon-arrow" />
                    </div>
                    <div className="language-value">
                        <p
                            className="white lang-p"
                            onClick={() => {changeLng("vi")}}
                        >
                            Viet Nam
                        </p>
                        <p
                            className="white lang-p"
                            onClick={() => {changeLng("en")}}
                        >
                            English
                        </p>
                    </div>
                </div>
         

                <div className="phone-find-container">
                    <div className="find-container" onClick={() => ShowFind()}>
                        <FaSearchLocation className="header-icon" />
                        <button type="text" className="find-btn">
                            Search
                        </button>
                    </div>
                    <div className="phone-container">
                        <FaPhoneAlt className="header-icon" />
                        <span className="phone-number">03.548.65073</span>
                    </div>
                </div>

                {currentUser ? (
                    <div className="log">
                        <Link to="/UserInfor">
                            <BsPerson />
                        </Link>

                        <button className="logout" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            setshowlog("hidden");
                        }}
                    >
                        <div className="log" onClick={() => Showlog()}>
                            <p>For User</p>
                            <IoIosArrowForward />
                        </div>
                    </OutsideClickHandler>
                )}
                <div className="clickout-mobile">
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            CloseMobile();
                        }}
                    >
                        <BsList
                            className="icon-list-mobile"
                            onClick={() => Showlist()}
                        />

                        <MobileMenu
                            showmobile={showmobile}
                            user={currentUser}
                            click={Showlist}
                            data={Destinationdata}
                        />
                    </OutsideClickHandler>
                </div>
                <Buttontop />
            </div>

            <Search id={showfind} />
            <div className="log-container" id={showlog}>
                <Link to="/LogIn" className="log-link">
                    Log in
                </Link>
                <Link to="/SignUp" className="log-link">
                    Register
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Header;