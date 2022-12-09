import React from "react";
import "./Blockcard.css";

const Blockcard = ({ data }) => {
  // console.log(data.image.url);
  return (
    <div className="blockcard">
      <p>{data.title}</p>
    </div>
  );
};

export default Blockcard;

// style={{
//     backgroundImage: `url(${data.image.url})`,backgroundSize:'cover'
//   }}
