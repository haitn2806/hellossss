import React from "react";
import './BillDetails.css'


function BillDetails({close,data}) {
    return ( 
        <div className="bill-form-container">
        <div className="billDetails">
            <button className="btn-close" onClick={()=>close()}>X</button>
            <h3>Bill Details</h3>
            <div className="bill-options">
                <span>Print</span>
                <span className="options-line">&ensp;/&ensp;</span>
                <span>PDF</span>
            </div>
            <div className="bill-infor">
                <div className="bill-inner">
                    <div className="bill-header">
                        <div className="infor-company">
                            <div>
                                <img src="http://localhost:3000/static/media/logo-alt.4a9836e37adae182c83a.png" alt="logo" />
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
                                <span>{data.StartDate}  -  15-11-2022</span>
                            </div>
                        </div>
                        <div className="user-infor">
                            <div className="user-name">
                                Customer:&nbsp;
                                <span>{data.FullName}</span>
                            </div>
                            <div className="user-phone">
                                Phone Number:&nbsp;
                                <span>{data.Phone}</span>
                            </div>
                            <div className="user-mail">
                                Email:&nbsp;
                                <span>{data.Email}</span>
                            </div>
                            <div className="user-amount">
                                User Amount:&nbsp;
                                <span>{data.Adult+data.Children}</span>&nbsp;
                                <div>
                                    <div className="amount-adult">
                                        (Adult:&nbsp;
                                        <span>{data.Adult}</span>
                                    </div>&emsp;
                                    <div className="amount-children">
                                        Children:&nbsp;
                                        <span>{data.Children}</span>)
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
                        <div className="signature">
                            <div className="company-signature">
                                Company
                                <span>VNXpedia</span>
                            </div>
                            <div className="user-signature">
                                Customer
                                <span>A</span>
                                <p>Nguyen Van A</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default BillDetails;