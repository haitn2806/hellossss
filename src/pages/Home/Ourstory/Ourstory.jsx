import React from "react";
import "./Ourstory.css";

const OurStory = () => {
  return (
    <div className="ourstory-main">
      <div className="row">
        <div className='contain-block'>
        <div className="block">
          <div className="skew-x box1 "></div>
        </div>

        <div className="block">
          <div className="skew-x box2 "></div>
        </div>

        <div className="block">
          <div className="skew-x box3 "></div>
        </div>
        </div>
        <div className="text">
            <div className="big-title">
                FIND YOUR TRIPS- GIVE YOUR SELF
            </div>
            <div className='body-title'>
            Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae.
            While early travel tended to be slower, more dangerous, and more dominated by trade and migration,
             cultural and technological advances over many years have tended to mean that travel has become easier and more accessible.
             Humankind has come a long way in transportation since Christopher Columbus sailed to the new world from Spain in 1492, 
             an expedition which took over 10 weeks to arrive at the final destination; to the 21st century when aircraft allows travel from Spain to the United States overnight.
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
