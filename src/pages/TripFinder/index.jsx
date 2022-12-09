import React from "react";
import { useState, useRef } from "react";
import "./style.css";
import { ImRadioUnchecked, ImSearch } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";
import { BiReset } from "react-icons/bi";
import Data from "../../data/tourlist.json";
import { useEffect } from "react";
import { HiSearchCircle } from "react-icons/hi";
import { AiFillFilter } from "react-icons/ai";
import TourCard from "../../components/TourCard/TourCard";
import useWindowSize from "../../hooks/useWindowSize";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Pagination } from 'antd';
import "antd/dist/antd.css";

const TripFinder = () => {

  const [Tourdata, setTourdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [Filter,setFilter] = useState({
    Input:'',
    Des:'',
    Style:'',
    Long:'',
    Price:''
  });
  
  const [activeDest,setactiveDest] = useState(['','','','']);
  const [activeStyl,setactiveStyl] = useState(['','','','','','','','','','','','','']);
  const [activeLong,setactiveLong] = useState(['','','','']);
  const [activeCost,setactiveCost] = useState(['','','','']);
  

  let Tourresult = Tourdata.filter(d=>d.TourName.toLowerCase().trim().includes(Filter.Input.toLowerCase().trim()))
  .filter(d=>Filter.Des==''?d : d.Country.includes(Filter.Des))
  .filter(d=>Filter.Style==''?d:d.TourType.includes(Filter.Style))
  .filter(d=>Filter.Long==''?d:(JSON.parse(d.DETAIL[0].Detail).length>(Filter.Long.split(',')[0]))&&(JSON.parse(d.DETAIL[0].Detail).length<(Filter.Long.split(',')[1])))
  .filter(d=>Filter.Price==''?d:Math.min(d.FRICE.map(d=>d.price))>Filter.Price[0]&&Math.min(d.FRICE.map(d=>d.price))<Filter.Price[1]);
 
  const [current,setcurrent] = useState(Tourresult.slice(0,9));
  const Longlist = [[0,6],[5,11],[10,16],[16,1000]];
 
 const ChangeDes = (e,x)=> {
  setFilter({...Filter,Des:e.target.value});
  let new1 = activeDest;
  const new2 = new1.map((d,index)=>index==x?d='btn-active':'');
  setactiveDest(new2);
 }
 const ChangeStyle = (e,x) => {
  setFilter({...Filter,Style:e.target.value});
  let new1 = activeStyl;
  const new2 = new1.map((d,index)=>index==x?d='btn-active':'');
  setactiveStyl(new2);
 }
 const ChangeLong = (e,x) => {
  setFilter({...Filter,Long:e.target.value});
  let new1 = activeLong;
  const new2 = new1.map((d,index)=>index==x?d='btn-active':'');
  setactiveLong(new2);
 }
 const ChangePrice = (e,x) => {
  setFilter({...Filter,Price:e.target.value});
  let new1 = activeCost;
  const new2 = new1.map((d,index)=>index==x?d='btn-active':'');
  setactiveCost(new2);
 }
   
  const callApi = async () => {
    setIsLoading(true);

    const response = await axios({
      method: "post",
      url: "https://vnxpedia.3i.com.vn/TravelAPI/AllTourTable",
      type: "json",
    });

    if (response.status === 200) {
      setTourdata(response.data.Object);
      setcurrent(response.data.Object.slice(0,9));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    callApi();   
    // setcurrent(Tourresult.slice(0,9));
  
  }, []);
  useEffect(()=>{
    setcurrent(Tourresult.slice(0,9));
  },[Filter]);

  const Changeinput = (e) => {
    setFilter({ ...Filter, Input: e.target.value });
  };

  const Reset = () => {

    setFilter({
    Input:'',
    Des:'',
    Style:'',
    Long:'',
    Price:''
    });
    setactiveDest(['','','','']);
    setactiveStyl(['','','','','','','','','','','','','']);
    setactiveLong((['','','','']));
    setactiveCost((['','','','']));    
  };

  const [showli1, setshowli1] = useState("hidden");
  const [showli2, setshowli2] = useState("hidden");
  const [showli3, setshowli3] = useState("hidden");
  const [showli4, setshowli4] = useState("hidden");
  const [showli5, setshowli5] = useState("hidden");

  const Showli = (a) => {
    switch (a) {
      case 1:
        showli1 === "showli" ? setshowli1("hiddenli") : setshowli1("showli");
        break;
      case 2:
        showli2 === "showli" ? setshowli2("hiddenli") : setshowli2("showli");
        break;
      case 3:
        showli3 === "showli" ? setshowli3("hiddenli") : setshowli3("showli");
        break;
      case 4:
        showli4 === "showli" ? setshowli4("hiddenli") : setshowli4("showli");
        break;
      case 5:
        showli5 === "showli" ? setshowli5("hiddenli") : setshowli5("showli");
        break;
    }
  };

  const [check, setCheck] = useState(false);

  const handleClick = () => {
    setCheck(!check);
  };

  const [show, setshow] = useState("show");
  const ShowFinder = () => {
    {
      show == "hidden" ? setshow("show") : setshow("hidden");
    }
  };

  const onChangePag = (page) => {
    setcurrent(Tourresult.slice((page-1)*9,(page*9)));
   
  };
  
  
  
  
  return (
    <div className="trip-finder">
      <div className="div-img-head">
        <div className="finder-text">
          <h1 className="finder-h1">TRIPFINDER</h1>
          <p className="finder-p">SELECT YOUR PERFECT EXERIENCE</p>
        </div>
      </div>

      <div className="finder-container">
        <div className={`finder-select ${show}`}>
          <div className="finder-key">
            <ImSearch className="finder-icon"  />
            <input
              className="finder-value"
              placeholder="Find your perfect trip"
              onChange={(e) => Changeinput(e)}
            ></input>
          </div>
          <div className="finder-title">
            <p>FILTER VIEW:</p>
            <button>
              <BiReset className="finder-reset" onClick={() => Reset()} />
            </button>
          </div>
          <div className="find-des fc ">
            <div className="show-more">
              <p>DESTINATION</p>
              <IoIosArrowDown
                className="more"
                onClick={() => Showli(1) && handleClick()}
              />
            </div>
            <ul className={`find-des-list fl  ${showli1}`} >

              <li className={activeDest[0]}>
                <button  value='Vietnam' onClick={(e)=>ChangeDes(e,0)} >VietNam</button>
              </li>
              <li className={activeDest[1]}>
                <button  value='Thailand' onClick={(e)=>ChangeDes(e,1)}>Thailand</button>
              </li>
              <li className={activeDest[2]}>
                <button  value='Laos' onClick={(e)=>ChangeDes(e,2)}>Laos</button>
              </li>
              <li className={activeDest[3]}>
                <button  value='Cambodia' onClick={(e)=>ChangeDes(e,3)}>Cambodia</button>
              </li>
            </ul>
          </div>
          <div className="find-style fc">
            <div className="show-more">
              <p>TRAVEL STYLE </p>
              <IoIosArrowDown className="more" onClick={() => Showli(2)} />
            </div>
            <ul className={`find-style-list fl ${showli2}`}>
              <li className={activeStyl[0]}>
                <button value='CLASSIC' onClick={(e)=>ChangeStyle(e,0)}>CLASSIC</button>
              </li>
              <li className={activeStyl[1]}>
                <button value='FAMILY' onClick={(e)=>ChangeStyle(e,1)}>FAMILY</button>
              </li>
              <li className={activeStyl[2]}>
                <button value='BEACH' onClick={(e)=>ChangeStyle(e,2)}>BEACH</button>
              </li>
              <li className={activeStyl[3]}>
                <button value='SHORTTRIPS' onClick={(e)=>ChangeStyle(e,3)}>SHORTTRIPS</button>
              </li>
              <li className={activeStyl[4]}>
                <button value='CULINARY' onClick={(e)=>ChangeStyle(e,4)}>CULINARY</button>
              </li>
              <li className={activeStyl[5]}>
              <button  value='ADVENTURE' onClick={(e)=>ChangeStyle(e,5)}>ADVENTURE</button>
              </li>
              <li className={activeStyl[6]}>
              <button  value='CRUISES' onClick={(e)=>ChangeStyle(e,6)}>CRUISES</button>
              </li>
              <li className={activeStyl[7]}>
                <button value='WELLES' onClick={(e)=>ChangeStyle(e,7)}>WELLES</button>
              </li>
              <li className={activeStyl[8]}>
                <button value='MICE' onClick={(e)=>ChangeStyle(e,8)}>MICE</button>
              </li>
              <li className={activeStyl[9]}>
                <button value='LUXURY' onClick={(e)=>ChangeStyle(e,9)}>LUXURY</button>
              </li>
              <li className={activeStyl[10]}>
                <button value='HERITAGES' onClick={(e)=>ChangeStyle(e,10)}>HERITAGES</button>
              </li>
              <li className={activeStyl[11]}>
                <button value='REPONSIBLE' onClick={(e)=>ChangeStyle(e,11)}>REPONSIBLE</button>
              </li>
              <li className={activeStyl[12]}>
                <button value='GOLF' onClick={(e)=>ChangeStyle(e,12)}>GOLF</button>
              </li>
            </ul>
          </div>
    
          <div className="find-length fc">
            <div className="show-more">
              <p>TOUR LENGTH </p>
              <IoIosArrowDown className="more" onClick={() => Showli(4)} />
            </div>
            <ul className={`find-length-list fl ${showli4}`}>
              <li >
                <button value={Longlist[0]} onClick={(e)=>ChangeLong(e)}>Under 5 day</button>
              </li>
              <li >
                <button value={Longlist[1]} onClick={(e)=>ChangeLong(e)}>6-10 day</button>
              </li>
              <li >
                <button value={Longlist[2]} onClick={(e)=>ChangeLong(e)}>11-15</button>
              </li>
              <li >
                <button value={Longlist[3]} onClick={(e)=>ChangeLong(e)}>Over 16 day</button>
              </li>
            </ul>
          </div>
          <div className="find-cost fc">
            <div className="show-more">
              <p>BUDGET </p>
              <IoIosArrowDown className="more" onClick={() => Showli(5)} />
            </div>
            <ul className={`find-cost-list fl ${showli5}`}>
              <li >
                <button value={[0,301]} onClick={(e)=>ChangePrice(e)}>Under 300$</button>
              </li>
              <li >
                <button value={[300,901]}>300-900$</button>
              </li>
              <li >
                <button value={[900,1501]}>900-1500$</button>
              </li>
              <li >
                <button value={[1500,999999]}>Over 1500$</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="finder-result-main">
          <div className="show-value-filter">
            {(Filter.Input==''&&Filter.Des==''&&Filter.Long==''&&Filter.Price==''&&Filter.Style=='')?<p className="show-filter-text"><span>ALL tour</span></p>
            :(
              <p className="show-filter-text">
            <span>{Filter.Input!==''&&`Key search :${Filter.Input} / `}</span>
            <span>{Filter.Des!==''&&`Destination :${Filter.Des} / `}</span>
            <span>{Filter.Style!==''&& `Style :${Filter.Style} / `}</span>
            <span>{Filter.Long!==''&& `Long :${Filter.Long} / `}</span>
            <span>{Filter.Price!==''&& `Cost :${Filter.Price}`}</span>
            </p>
            )
            }
            
            </div>
          <div className="finder-list-card">
          {current.length>0 && current.map(d=><div className="tour-card-finder">
            <TourCard data={d}/>
            </div>)}
            </div>
        <Pagination defaultCurrent={1} total={Tourresult.length} onChange={onChangePag} defaultPageSize={9}/>

          </div>
               
      </div>
      <HiSearchCircle
        className="icon-finder-mobile icfm1"
        onClick={() => ShowFinder()}
      />
    </div>
  );
};

export default TripFinder;
