import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "./Slide.css";
// import "./styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogEx from "../BlogEx/BlogEx";
import { Link } from "react-router-dom";
import axios from "axios";

const Slide = () => {
  //   const [nav1, setNav1] = useState();
//   const [nav2, setNav2] = useState();
//   const slider1 = useRef();
//   const slider2 = useRef();
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     adaptiveHeight: true,
//     mobileFirst: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           arrows: false,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const [Blogdata, setBlogdata] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const callApi =async()=>{
//     setIsLoading(true);

//      const response = await axios({
//          method: 'post',
//          url: 'https://vnxpedia.3i.com.vn/TravelAPI/BlogTable?CurrentPage=1',
//          type: 'json'
//      });

//      if(response.status === 200){
//          setBlogdata(response.data.Object)
//      }
//      setIsLoading(false);     
//     }
//     console.log(Blogdata);

//   useEffect(()=>{
//      callApi();    
     
//  },[]);

//   return (
//     <div
//       style={{
//         background: "#ccc",
//         padding: "0 10%",
//       }}
//     >
//       {Blogdata.length>0&&
//       <Slider {...settings}>
//         {Blogdata.map(d=>
//         <div className="blogex-container">
//         <BlogEx data={d}/>
//         </div>
//         )}
//       </Slider>
//       }
//     </div>
//   );
};

export default Slide;