import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineMyLocation } from "react-icons/md";
import { BsCalendar } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import "./Search.css";
import Datepicker from "../DatePicker/Datepicker";
import WrapperSearch from "./WraperSearch";
import { callApiTourTable } from "../../api/Tour";
import { Link } from "react-router-dom";
import { set } from "react-hook-form";
import { callAPIBlogTable } from "../../api/Blog";

const Search = ({ id }) => {
  const [visible, setVisible] = useState(true);
  const [tour, setTour] = useState(null);
  const [blog, setBlog] = useState(null);
  const [shows1, setShow1] = useState(null);
  const [shows2, setShow2] = useState(null);
  const hide = () => setVisible(false);





  const show = () => setVisible(true);
  // const [input, setInput] = useState()
  useEffect(() => {
    const callApi = async () => {
      const resTour = await callApiTourTable();
      const resBlog = await callAPIBlogTable();
      setTour(resTour.data.Object);
      setBlog(resBlog.data.Object);
    };
    callApi();
  }, []);

  // console.log("tour", tour);
  console.log("tour", blog);



  const getTourByName = (e) => {
    let supo = e.target.value;
    console.log(supo);
    if (supo.length > 0) {
      setShow1(
        tour?.filter((d) => d.TourName.toLowerCase().trim().includes(supo.toLowerCase().trim()))  
      );
      setShow2(blog?.filter((d) => d.Detail.toLowerCase().trim().includes(supo.toLowerCase().trim())))
      console.log("show", shows2);
    } else {
      setShow1(null);
      supo = "";
    }
  };

  return (
    <Tippy
      placement="bottom"
      interactive
      visible={visible}
      onClickOutside={hide}
      render={(attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
          <WrapperSearch>
           
            {shows1?.map((item) => (
              
              <>

                <div className="flex">
                  
                  <div>
                    <img width={150} height={50} src={item.BannerImg} alt="" />
                  </div>

                  <div className="flex-col">
                  <Link className="box-name" to={`/TravelInfo/${item.ID}`}>  <div>{item.TourName}</div></Link>
                
                  
                  </div>
                </div>
              </>
            ))}
              {/* <div>blog</div> */}
              {
                shows2?.map((item)=>(
                  <>
 <div className="flex">
                  
                  <div>
                    <img width={150} height={50} src={item.Image} alt="" />
                  </div>

                  <div className="flex-col">
                  <Link className="box-name" to={`/BlogDetails/${item.Id}`}>  <div>{item.Title}</div></Link>
                  
                  </div>
                </div>
                  </>
                ))
              }
            <br />
          </WrapperSearch>
        </div>
      )}
    >
      <div className="search-container" id={id}>
        <BiSearchAlt className="search-icon" />
        <button onClick={visible ? hide : show}>
          <input
            className="search-text"
            type="text"
            placeholder="Search your travel tour"
            onChange={getTourByName}
          />
        </button>
      </div>
    </Tippy>
  );
};

export default Search;

// <div className='search-container' id={id}>
//    <form className='search-main'>
//     <div className='search-area'>
//         <ImLocation2 className='icons'/>
//         <input className='search-input' placeholder='Viet Nam'/>
//         <MdOutlineMyLocation className='icons'/>
//     </div>
//     <hr className='line'/>
//     <div className='date-pick'>
//         <BsCalendar className='icons'/>
//         <Datepicker className='date-in' placeholder='Start Date'/>
//         -
//         <Datepicker className='date-out' placeholder='End Date'/>
//     </div>
//     <hr className='line'/>
//     <div className='pick-number'>
//         <BsFillPeopleFill className='icons'/>
//         <button className='number-p'>Guest : 1</button>
//     </div>
//     <button type='submit' className='submit'>Find tour</button>
//    </form>
// </div>