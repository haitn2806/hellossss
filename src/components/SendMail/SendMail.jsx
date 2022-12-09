import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./SendMail.css";

function SendMail() {
    //Email JS
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_m0pr5g9",
                "template_43wp9zp",
                form.current,
                "seXpyo7DkoDJNU7n8"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        form.current.reset();
    };

    //SMTP

    // const [formState, setFormState] = useState({});

    // const changeHandler = (event) => {
    //     setFormState({...formState, [event.target.name]: event.target.value})
    // }

    return (
        <form ref={form} onSubmit={sendEmail} className="form-send">
            <label>Subject</label>
            <input type="text" name="subject" />

            <label>Name</label>
            <input type="text" name="to_name" />

            <label>Email</label>
            <input type="text" name="from_name" />

            <label>Message</label>
            <textarea name="message" />

            <label for="name" className="form-label">
                Images
            </label>
            <input type="file" name="img" accept="image/*"></input>

            <input type="submit" value="Send" />
        </form>
    );
}

export default SendMail;
