import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight, BsStarFill } from "react-icons/bs";
import ShowMoreText from "react-show-more-text";
import feebback from "../../../../data/feebback1.json";
import Rate from "../Rating/Rating";
import moment from "moment";
import Star from "./Star";
import ReactPaginate from "react-paginate";
import axios from "axios";
import useFetch from "../../../../hooks/useFetch";

import "./FeedbackDetail.css";
import { useEffect } from "react";

const FeedbackDetail = () => {
  const [feed, setFeed] = useState(1);
  const feeblenght = feebback.Object;

  const [next, setNext] = useState([]);

  const url = "https://vnxpedia.3i.com.vn/TravelAPI/FeedbackTable?CurrentPage=1";
  useEffect(() => {
    axios
      .post(url)
      .then(function (response) {
        // handle success
        // console.log("response", response.data.Object);
        setNext(response.data.Object);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  const { data, loading, error } = useFetch(url);

  // console.log("data", data);

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCounts = Math.ceil(next.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  

  return (
    <div>
      <div className="feedback-display">
        <h2 className="feedback-title">Clients say about us</h2>
        <div className="feedback-cont">
          {next.length>0&&next.slice(pagesVisited, pagesVisited + usersPerPage).map((feeb) => (
            <div className="outstanding-feedback">
              <div className="feedback-cus">
                <img
                  className="cus-img"
                  src="https://www.exoticasiaholidays.com.au/feedbackphotos/1236_Shirley-resized.jpg"
                  alt=""
                />
                <div className="feedback-content">
                  <div>
                    <div className="cus-name">{feeb.Email} </div>
                    <div className="time-feed">
                      {moment(`${feeb.Date}`).utc().format("YYYY-MM-DD")}
                     
                    </div>
                  </div>
                  <div className="stars">
                    {[...Array(5)].map((star, i) => {
                      const a = i + 0;
                      return (
                        <BsStarFill
                          className="star"
                          color={a < feeb.Rate ? "#d0b316" : "gray"}
                        />
                      );
                    })}
                  </div>
                  <ShowMoreText
                    lines={3}
                    more="Show more"
                    less="Show less"
                    className="a"
                  >
                    {feeb.Comment}
                  </ShowMoreText>
                  <div className="feedback-img">
                    {/* <img
                      src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/7/10/hinh-anh-cac-loai-hinh-du-lich-3-1657423025597-1657423027180128362217.jpeg"
                      alt=""
                    />
                    <img
                      src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/7/10/hinh-anh-cac-loai-hinh-du-lich-3-1657423025597-1657423027180128362217.jpeg"
                      alt=""
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ReactPaginate
          //   className="paginationActive"
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCounts}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
      {/* <div>
              info
          </div>
          <div>
              start
          </div>
          <div>
              <p>detail</p>
              <div>
                  img
              </div>
          </div> */}
    </div>
  );
};

export default FeedbackDetail;
