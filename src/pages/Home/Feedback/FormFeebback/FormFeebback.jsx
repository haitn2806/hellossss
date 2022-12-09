import { useContext, useState } from "react";
import { useFormik } from "formik";
import { BsStar } from "react-icons/bs";
import Rate from "../Rating/Rating";
import { number, string } from "prop-types";
import axios from "axios";
import QueryString from "query-string";
import qs from "qs";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './style.css';
import { UserContext } from "../../../../components/Layout";
import { useNavigate } from "react-router-dom";



const FormFeebback = () => {
    const [rating, setRating] = useState(0);
    const [user, setUser] = useState(false);
    const [formState, setFormState] = useState({});
    const User= useContext(UserContext);
    const navigate = useNavigate();

    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const onSubmit = async (values, actions) => {
        console.log("values", values);
        // console.log(actions);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };

    const [Email, setEmail] = useState("");
    const [Comment, setComment] = useState("");
    const [Image,setImage] = useState();

    const form = useRef();

    const handelSubmit = (e) => {
        if(User.username==null) {
            navigate("/LogIn", { replace: true });
          } else {
        e.preventDefault();
        console.log("rating", rating);
        callApi();
        callApiSendAdmin();}
    };
    //call tạo feedback

    ///////////////////////
    const [NewFeedback, setNewfeedback] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const callApi = async () => {

        const response = await axios({
            method: "post",
            url: "https://vnxpedia.3i.com.vn/TravelAPI/InsertFeedback",
            data: qs.stringify({
                Name:User.username.UserName,
                Email: Email,
                Comment: Comment,
                Rate:rating,
                Date: String(new Date),
                Image:Image

            }),
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=utf-8",
            },
        });
    };
    
    
    const callApiSendAdmin = async () => {

        const response = await axios({
            method: "post",
            url: "https://vnxpedia.3i.com.vn/TravelAPI/SendMailFeedback",
            data: qs.stringify({
                header: `You have new feedback from ${Email}`,
                content: `Comment : ${Comment}
                Rating : ${rating}`,
            }),
            headers: {
                "content-type":
                    "application/x-www-form-urlencoded;charset=utf-8",
            },
        });
    };
    // const callApiSendCustomer = async () => {
    //     const response = await axios({
    //         method: "post",
    //         url: "https://vnxpedia.3i.com.vn/TravelAPI/InsertFeedback",
    //         data: qs.stringify({
    //             header: Input,
    //             content: Input2,
    //             mail:rating,
    //         }),
    //         headers: {
    //             "content-type":
    //                 "application/x-www-form-urlencoded;charset=utf-8",
    //         },
    //     });

    //     if (response.status === 200) {
    //         alert("Thêm thành công");
    //     } else alert("Thất bại");
    // };


    return (
        <div className="feedback-write">
            <h2 className="feedback-title">Write your feedback</h2>
            <form
                ref={form}
                onSubmit={(e) => handelSubmit(e)}
                autoComplete="off"
            >
                <div className="spacer"></div>
                <div className="form-group">
                    <label for="fullName" className="form-label">
                        Email
                    </label>
                    <input
                        
                        onChange={(e) => setEmail(e.target.value)}
                        
                        className="form-control"
                        name="message1"
                    />
                    <input name='message2' style={{display:'none'}} value={rating}></input>
                    {/* <span className="form-message"></span> */}
                </div>
                <div className="form-group">
                    <label for="name" className="form-label">
                        Evaluate
                    </label>
                    <div className="evaluate">
                        <Rate
                            onRating={(rate) => setRating(rate)}
                            rating={rating}
                        />
                        <input className="input-rate" value={rating} type="text" name="rating"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="name" className="form-label">
                        Content
                    </label>
                    <textarea
                        className="feedback-content--write"
                        name="message"
                        rows="4"
                        cols="50"
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <span className="form-message"></span>
                </div>
                <div className="form-group">
                    <label for="name" className="form-label">
                        Images
                    </label>
                    <input type="file" accept="image/*" onChange={(e)=>setImage(e.target.value)}></input>
                </div>
                <div className="form-group ">
                    <button
                        className="btn-active btn-feedback"
                        type="submit"
                        value="Send"
                    >
                        Submit
                    </button>
                    {/* <button disabled={isSubmitting} type="submit">
            Submit
          </button> */}
        </div>
      </form>
    </div>
  );
};
export default FormFeebback;