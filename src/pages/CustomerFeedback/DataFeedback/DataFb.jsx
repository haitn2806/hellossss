import React from "react";
import Data from "./../../../data/feeback.json";
import './DataFb.css'


const DataFb = () => {  
  return (
    <div className="feedbackpar">
      {Data.length > 0 &&
        Data.map((d, index) => (
          <div className="feebackchil" key={index}>
            <div className="imagcustomer">
            </div>
            <div className="property">
                <div className="emailuser padding2percent" ><b>From:</b> {d.email}</div>
                <div className="rateuser "> {d.rate}</div>
                <div className="commentuser padding2percent">"{d.comment}"</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DataFb;
