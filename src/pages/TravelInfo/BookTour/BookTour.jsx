import React from "react";
import "./style.css";
import { Button, Radio } from "antd";
import { DatePicker, Space } from "antd";
import Input from "../../../components/Input/Input";
import { useState, useEffect } from "react";
import axios from 'axios';
import qs from "qs";
import { toast } from 'react-toastify';
import "antd/dist/antd.css";
import { nonNegativeInteger } from "airbnb-prop-types";
import { toastSuccess } from "../../../utils/toastr";

const BookTour = ({ onClick, status ,data ,htl,paxl,user}) => {
  const onChangeDate = (date, dateString) => {
    // console.log(date, dateString);
  };

  const [Bookinfor, setBookinfor] = useState({
    UserName: user?user.UserName:'',
    TourCode: data.TourCode,
    FullName: "",
    Email: "",
    Phone: "",
    StartDate: "",
    Date: new Date(),
    Status: "Prepare",
    Adult: 1,
    Children: 0,
    Note: "",
    Price: data.FRICE.length>0?data.FRICE[0].price:'',
    Hotel:htl.length>0?htl[0]:''
  });
  
  // let Paxpick = paxl.find(d=>d.includes(`${Numberc}`));
  // console.log(Paxpick);
  // if (Paxpick.length==0){Paxpick=paxl}
  // (Numberc > Number(paxl[paxl.length-1].split('PAX')[0])) {const Paxpick=paxl[paxl.length-1]}
  // else { Paxpick = paxl.find(d=>d.includes(`${Numberc}`))}

  // if (data.FRICE.length>0) {
    
    
    
  // } 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    callApi();
    callApiSendmail();
    console.log(Bookinfor);
  };
  ////Call thêm booking
  const callApi = async () => {

    const response = await axios({
        method: "post",
        url: "https://vnxpedia.3i.com.vn/TravelAPI/InsertBooking",
        data: qs.stringify({
          UserName: user.UserName,
          TourCode: data.TourCode,
          FullName: Bookinfor.FullName,
          Email: Bookinfor.Email,
          Phone: Bookinfor.Phone,
          StartDate: Bookinfor.StartDate,
          Date: new Date(),
          Status: "Prepare",
          Adult: Bookinfor.Adult,
          Children: Bookinfor.Children,
          Note: Bookinfor.Note,
          Price: Bookinfor.Price,
        }),
        headers: {
            "content-type":
                "application/x-www-form-urlencoded;charset=utf-8",
        },
    });

    if (response.status === 200) {
        
     toastSuccess(' Inquire complete!')
          console.log(response);
    } else alert("Invaild infor");
};
const callApiSendmail = async () => {

  const response = await axios({
      method: "post",
      url: "https://vnxpedia.3i.com.vn/TravelAPI/SendMailCustom",
      data: qs.stringify({
          header: `You inquiried new travel from VNXpedia`,
          content: `Tour name: ${data.TourName}`,
          mail : Bookinfor.Email,
      }),
      headers: {
          "content-type":
              "application/x-www-form-urlencoded;charset=utf-8",
      },
  });
}; 
const setNumber = () =>{
 if(data.FRICE.length>0){
  let Numberc= Number(Bookinfor.Adult)+Number(Bookinfor.Children);
  let CostNumber = data.FRICE.filter(d=>(JSON.parse(d.TourItems).Pax[0].includes(String(Numberc))));
  if(CostNumber.length==0){CostNumber=data.FRICE.filter(d=>JSON.parse(d.TourItems).Title==paxl[paxl.length-1])};
  let Cost = (CostNumber.find(d=>JSON.parse(d.TourItems).Hotel==Bookinfor.Hotel));
  setBookinfor({...Bookinfor,Price:Cost.price});}
}
const setChildren = (e) =>{
  setBookinfor({ ...Bookinfor, Children: e.target.value });
  setNumber();
}
const setAdult = (e) =>{
  setBookinfor({ ...Bookinfor, Adult: e.target.value });
  setNumber();
}



  return (
    <div className="book-container" style={{ display: `${status}` }}>
      <form className="book-form" onSubmit={(e) => handleSubmit(e)}>
      <p className="close-form" onClick={onClick}>
          RETURN TO TRIP PAGE
        </p>
        <h1 className="h1-book">Booking your Trip</h1>

        <div className="body-form-book">
          <p>
            Fill out the form below to receive a detailed itinerary for this
            trip. Please note: While we try to share the most accurate itinerary
            with you, these are sometimes subject to change and should not be
            treated as final.
          </p>
          <div className="item-form">
            <label className="label-booking">Full Name *</label>
            <input
              style={{ borderBottom: "1px solid #e5e5e5" }}
              id="inp-fullname"
              type="name"
              name="email "
              onChange={(e) =>
                setBookinfor({ ...Bookinfor, FullName: e.target.value })
              }
            />
          </div>
          <div className="item-form">
            
            <label className="label-booking">Email *</label>
            <input
              style={{ borderBottom: "1px solid #e5e5e5" }}
              id="inp-email"
              type="email"
              name="email"
              onChange={(e) =>
                setBookinfor({ ...Bookinfor, Email: e.target.value })
              }
            />
          </div>
          <div className="item-form">
            
            <label className="label-booking" id="inp">
              Phone Number *
            </label>
            <input
              style={{ borderBottom: "1px solid #e5e5e5" }}
              id="inp-phone"
              type="phone"
              name="phone "
              onChange={(e) =>
                setBookinfor({ ...Bookinfor, Phone: e.target.value })
              }
            />
          </div>
          <div className="item-form">  
            <label className="label-booking">Departure Date *</label>
            <input
              style={{ borderBottom: "1px solid #e5e5e5" }}
              id="inp-date"
              type="date"
              name="phone "
              onChange={(e) =>
                setBookinfor({ ...Bookinfor, StartDate: e.target.value })
              }
            />
          </div>
          
          {htl.length>0&&
          <div className="item-form">  
          <label className="label-booking">HOTEL PAX*</label>
          <select onChange={(e)=>setBookinfor({...Bookinfor,Hotel:e.target.value})} name="hotel" id="hotels" style={{border:'none', borderBottom: "1px solid #e5e5e5" }}>
             {htl.map(d=><option value={d}>{d}</option>)}
              
             
          </select>
          </div>
          }
          

          <div className="item-form ">
            <div className="adult-children1" >
              <label className="label-booking">
                Adult: </label>
                <input
                  style={{ borderBottom: "1px solid #e5e5e5" }}
                  id="inp-adult"
                  type="number"
                  name="phone "
                  value={Bookinfor.Adult}
                  onChange={(e) =>
                    setBookinfor({ ...Bookinfor, Adult: e.target.value })}
                />
             
            </div>
            <div className="adult-children1">
           
              <label className="label-booking label-width-children">
                Children:</label>
                <input
                  style={{ borderBottom: "1px solid #e5e5e5" }}
                  id="inp-adult"
                  type="number"
                  name="phone "
                  // value={Bookinfor.Children}
                  onChange={(e) =>
                    setBookinfor({ ...Bookinfor, Children: e.target.value })
                  }
                />
              
            </div>
          </div>
          {/* <p>Total cost: {Bookinfor.Price}$</p> */}
          <div className="item-form note-div">
            <label className="label-note">Customize your trip :</label>
            <textarea
              className="text-area-booking"
              placeholder="Change your destination, services, other requests"
              onChange={(e) =>
                setBookinfor({ ...Bookinfor, Note: e.target.value })
              }
            />
            <button type="submit" className="btn-submit">
              Submit
            </button>{" "}
          </div>
        </div>


      </form>
    </div>
  );
};

export default BookTour;