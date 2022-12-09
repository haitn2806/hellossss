import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import qs from "qs";

const ShareTrip = ({ onClick, status,data }) => {
  const [moreShare, setMoreShare] = useState([{
    fullname:'',
    email:''
   }]);
  
   const [yourinfor,setYourinfor] = useState({
    fullname:'',
    email:''
   });
  
  
  const setnameguest = (e,index)=>{
    let listguest = moreShare;
    listguest[index].fullname=e.target.value;
    setMoreShare(listguest);
    console.log(moreShare);
  }
  const setemailguest = (e,index)=>{
    let listguest = moreShare;
    listguest[index].email=e.target.value;
    setMoreShare(listguest);
  }
  
  
  const handleAdd = () => {
    setMoreShare([...moreShare, { fullname:"", email:"" }]);
   
    
  };
  const handleDel = (index) => {
    const list = [...moreShare];
    list.splice(index, 1);
    setMoreShare(list);
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    moreShare.map(d=>callApiSendmail(d))
    console.log('More:', moreShare);
    console.log('You',yourinfor);
  }
  console.log(moreShare);

  const callApiSendmail = async (d) => {

    const response = await axios({
        method: "post",
        url: "https://vnxpedia.3i.com.vn/TravelAPI/SendMailCustom",
        data: qs.stringify({
            header: `${yourinfor.fullname} want share his travel with you`,
            content: `Travel Infor: http://vnxpedia/TravelInfo/${data.ID}`,
            mail : d.email,
        }),
        headers: {
            "content-type":
                "application/x-www-form-urlencoded;charset=utf-8",
        },
    });
  };

  return (
    <div className="book-container" style={{ display: `${status}` }}>
      <form
        className="book-form share-form "
        onSubmit={(e) => handleSubmit(e)}
        
      >
        <div className="share-form">
          <button className="close-form" onClick={onClick}>
            RETURN TO TRIP PAGE
          </button>
          <div className="share-form-body">
            <h1 className="h1-book">SHARE TRIP</h1>
            <p id="share-form-body-p">YOUR information</p>
            <div className="share-item">
              <label className="label-booking share-label-booking ">
                Full Name *
              </label>
              <input
                style={{ borderBottom: "1px solid #e5e5e5" }}
                className="margin-fullname"
                id="inp-fullname"
                type="name"
                name="name"
                onChange={(e) => setYourinfor({...yourinfor,fullname:e.target.value})}
              />
              <label className="label-booking share-label-booking ">
                Email *
              </label>
              <input
                style={{ borderBottom: "1px solid #e5e5e5" }}
                id="inp-email"
                type="email"
                name="email"
                onChange={(e) => setYourinfor({...yourinfor,email:e.target.value})}
              />
            </div>
            <p id="share-form-body-p">WHO ARE YOU SHARING WITH?</p>

            {moreShare.map((d,index) => {
              // console.log(index);

              return (
                <div className="share-item">
                  <label className="label-booking share-label-booking">
                    Full Name *
                  </label>
                  <input
                    style={{ borderBottom: "1px solid #e5e5e5" }}
                    id="inp-fullname"
                    type="name"
                    name="name "
                    onChange={(e)=>setnameguest(e,index)}
                  />
                  <label className="label-booking share-label-booking">
                    Email *
                  </label>
                  <input
                    style={{ borderBottom: "1px solid #e5e5e5" }}
                    id="inp-email"
                    type="email"
                    name="email"
                    onChange={(e)=>setemailguest(e,index)}
                  />
                </div>
              );
            })}

            <div className="share-item">
              <button className="add-btn btn-submit" onClick={handleAdd}>
                + Add more
              </button>
              <button className="add-btn btn-submit" onClick={handleDel}>
                - Dismish
              </button>
        
            </div>
          </div>
          <div className="share-text-area">
            <p className="note-p">(Max. 8 recipients)</p>
            <p>Include a message to your recipients (optional):</p>
            <textarea className="text-share-area"></textarea>
          </div>
          <button className="btn-submit"  >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ShareTrip;