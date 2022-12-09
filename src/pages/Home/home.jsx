import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import "./home.css";
import SlideBig from "./Slide";
import Whychoose from "./Whychoose/Whychoose";
import Hot from "./Hot";
import SpecialTour from "../../components/SpecialTour/SpecialTour";
import SuggestTour from "../../components/SuggestTour/SuggestTour";
import Slideblog from "../../components/SlideBlog/Slideblog";
import WhyTravel from "./WhyTravel/WhyTravel";
import axios from "axios";
import Loadingbox from "../../components/Loadingbox/Loadingbox";
import About from "./About/About";
import { callApiTourTable } from "../../api/Tour";

const Home = () => {
    const [Tourdata, setTourdata] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const Location = useLocation();
    const Tourhot = Tourdata.slice(0,5);

    useEffect(()=>{
        setIsLoading(true);
        const supo = async()=>{
        try {
       const data = await callApiTourTable()
       setIsLoading(false);
       console.log("data >>>>>",data);
          setTourdata(data.data.Object)
        } catch (error) {
          console.log(error);
        }
        }
        supo()
       
       },[Location]);

    return (
        <div>
              <div className="slide-container">
                <SlideBig />
            </div>
            {isLoading ? (
                <Loadingbox />
            ) : (
                <div>
                  
                    {Tourdata.length > 0 && <Hot data={Tourhot} />}
                    <About />
                    <SuggestTour />
                    <WhyTravel />
                    <SpecialTour />
                    <Slideblog />
                    <Whychoose />
                </div>
            )}
        </div>
    );
};

export default Home;
