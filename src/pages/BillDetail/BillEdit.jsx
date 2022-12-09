import { Data } from "@react-google-maps/api";
import React from "react";
import { useState } from "react";
import './BillDetails.css';


function BillEdit({close,data,set}) {

    const [FormEdit,setFormEdit] = useState({
        Id:data.Id,
        FullName:data.FullName,
        Phone:data.Phone,
        Email:data.Email,
        Adult:data.Adult,
        Children:data.Children,
        Note:data.Note,
    })
     


    ////////Call API
  const callApi = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    // Object.keys(FormEdit).map((d,index)=>urlencoded.append(d, Object.values(FormEdit)[index]))
    urlencoded.append('ID',FormEdit.Id);
    urlencoded.append('FullName',FormEdit.FullName);
    urlencoded.append('Phone',FormEdit.Phone);
    urlencoded.append('Email',FormEdit.Email);
    urlencoded.append('Adult',FormEdit.Adult);
    urlencoded.append('Children',FormEdit.Children);
    urlencoded.append('Note',FormEdit.Note);

    

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    var result = await fetch("https://vnxpedia.3i.com.vn/TravelAPI/UpdateBooking", requestOptions);
    console.log(result);
    console.log(FormEdit);
  };

  const handleSubmit= (e) => {
    e.preventDefault();
    set({...data,...FormEdit});
    callApi();
  }
  
    
    return ( 

       <div className="bill-form-container">
        <form className="billDetails" onSubmit={(e)=>handleSubmit(e)}>
            <h3>Edit booking tour</h3>
            {/* <div className="bill-options">
                <span>Print</span>
                <span className="options-line">&ensp;/&ensp;</span>
                <span>PDF</span>
            </div> */}
            <div className="bill-infor">
                <div className="bill-inner">
                    <div className="bill-header">
                        <div className="infor-company">
                            <div>
                                <img src="http://localhost:3000/static/media/logo-alt.4a9836e37adae182c83a.png" alt="logo"  className="logo-bill"/>
                                <span className="company-name">VNXpedia</span>
                            </div>
                            <div className="company-infor">
                                <span>Nhà B1-4 Khu đô thị Hạ Đình - Thanh Xuân - Hà Nội</span>
                                <a href="tel:098 7654 321" className="company-phone">098 7654 321</a>
                            </div>
                        </div>
                        <div className="bill-qr">
                            <img src="https://chart.googleapis.com/chart?cht=qr&chl=VNXpedia&chs=180x180&choe=UTF-8&chld=L|2" alt="qr" />
                        </div>
                    </div>
                    <div className="bill-content">
                        <div className="tour-infor">
                            <div className="tour-code">
                                Tour Code:&nbsp;
                                <span>{data.TourCode}</span>
                            </div>
                            <div className="tour-name">
                                Tour Name:&nbsp;
                                <span>{data.TourName[0].TourName}</span>
                            </div>
                            <div className="tour-time">
                                Tour Time:&nbsp;
                                <span>4 days 4 nights <br/>
                                   Time Start :<input className="input-date" type='date'  value={FormEdit.StartDate} onChange={(e)=>setFormEdit({...FormEdit,StartDate:e.target.value})}/>
                                </span>
                            </div>
                        </div>
                        <div className="user-infor">
                            <div className="user-name">
                                Customer:&nbsp;
                                <input type='text' className="input-none" value={FormEdit.FullName} onChange={(e)=>setFormEdit({...FormEdit,FullName:e.target.value})}></input>
                            </div>
                            <div className="user-phone">
                                Phone Number:&nbsp;
                                <input type='text'  className="input-none" value={FormEdit.Phone} onChange={(e)=>setFormEdit({...FormEdit,Phone:e.target.value})}></input>
                            </div>
                            <div className="user-mail">
                                Email:&nbsp;
                                <input className="input-none" type='email' value={FormEdit.Email} onChange={(e)=>setFormEdit({...FormEdit,Email:e.target.value})}></input>
                            </div>
                            <div className="user-amount">
                                User Amount:&nbsp;
                                <span>{Number(FormEdit.Adult)+Number(FormEdit.Children)}</span>&nbsp;
                                <div>
                                    <div className="amount-adult">
                                        (Adult:&nbsp;
                                        <input type='number' className="input-none input-count" value={FormEdit.Adult} onChange={(e)=>setFormEdit({...FormEdit,Adult:e.target.value})}/>
                                    </div>&emsp;
                                    <div className="amount-children">
                                        Children:&nbsp;
                                        <input type='number' className="input-none input-count" value={FormEdit.Children} onChange={(e)=>setFormEdit({...FormEdit,Children:e.target.value})}/>)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bill-footer">
                        <div className="bill-price">
                            Price:&nbsp;
                            <span>{data.Price==0?'':data.Price} $</span>
                        </div>
                        {/* <div className="signature">
                            <div className="company-signature">
                                Company
                                <span>VNXpedia</span>
                            </div>
                            <div className="user-signature">
                                Customer
                                <span>A</span>
                                <p>Nguyen Van A</p>
                            </div>
                        </div> */}
                        <div className="btn-end-form">
                            <button type='submit' className="btn-submit">Submit</button>
                            <button className="btn-submit" onClick={()=>close()}>Close</button>
                        </div>
                    </div>
                </div> 
            </div>
        </form>
        </div>
    );
}

export default BillEdit;