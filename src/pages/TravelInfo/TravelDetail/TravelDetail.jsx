import React from "react";
import "./TravelDetail.css";
import { BsCheck2 } from "react-icons/bs";
import { RiRecordCircleLine } from "react-icons/ri";
import Data from "./../../../data/tourlist.json";
import { useState } from "react";
import { Radio } from "antd";
import "antd/dist/antd.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TravelDetail = ({ data, id }) => {
  const [seemore, setSeemore] = useState("show-less");
  const newdata = JSON.parse(data.DETAIL[0].Detail);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [day, setday] = useState(newdata[0]);
  const daypicker = (d) => {
    setday(d);
    console.log(day);
    console.log(day.title);
  };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleSeemore = () => {
    if (seemore == "show-all") {
      setSeemore("show-less");
    } else {
      setSeemore("show-all");
    }
  };

  return (
    <div className="detail-tour" id={id} data-aos="fade-up">
      {data !== "" ? (
        <div>
          <div className="title-detailtour gold"> Tour Itinerary </div>
          <div className={`body-detailtour body-detailtour-${seemore}`}>
            <div className="imaged-tour">
              <img data-aos="zoom-in" src={day.Image} alt="" />
            </div>
            <div className="peace-tour">
              {day !== null && (
                <div className="day-infor">
                  <p className="title-tour">{day.Title}</p>
                  <ul>
                    {/* {day.content.map((d) => (
                  <li>
                    <BsCheck2 />
                    {d}
                  </li>
                ))} */}
                    <li
                      dangerouslySetInnerHTML={{ __html: day.Description }}
                    ></li>
                  </ul>
                </div>
              )}
              <div className="btn-seemore">
                <button onClick={handleSeemore}>See more...</button>
              </div>
              <Radio.Group onChange={onChange} value={value}>
                {newdata.map((d, index) => (
                  <Radio value={index + 1} onClick={() => daypicker(d)}></Radio>
                ))}
                {/* // <Radio value={2} onClick={() => daypicker(d)}></Radio>
      // <Radio value={3} onClick={() => daypicker(d)}></Radio>
      // <Radio value={4} onClick={() => daypicker(d)}></Radio> */}
              </Radio.Group>
            </div>
          </div>
          {/* <div className="bullet-day">
        {data.map((d, id) => (
          <div className="icon-day" onClick={() => daypicker(d)}>
            <RiRecordCircleLine />
            <div key={id}>{`${id + 1}`}</div>
          </div>
        ))}
      </div> */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TravelDetail;