import { LayoutFilled } from "@ant-design/icons";
import React from "react";
import "./style.css";
import Input from "../../../components/Input/Input";
import { GrUser } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { MdChildCare } from "react-icons/md";

const EditTour = ({ data }) => {
    return (
        <div className="form-edit-container">
            <div className="form-title">Make a perfect trip</div>
            <form className="form-edit">
                <h1 className="form-edit-h1">{data.title}</h1>
                <div className="div-edit">
                    <label>
                        <GrUser className="blue" />
                        User Name :{" "}
                    </label>
                    <Input type="text" value={data.name} />
                </div>
                <div className="div-edit">
                    <label>
                        <FiMail className="green" />
                        Email :{" "}
                    </label>
                    <Input type="text" value={data.email} />
                </div>
                <div className="div-edit">
                    <label>
                        <HiOutlinePhone className="red" />
                        Phone :{" "}
                    </label>
                    <Input type="text" value={data.phone} />
                </div>
                <div className="div-edit">
                    <label>
                        <AiOutlineFieldTime className="gold" />
                        Tour length :
                    </label>
                    <Input type="text" value={data.time} />
                </div>
                <div className="div-edit">
                    <label>
                        <BsCalendar2Date className="grown" />
                        Start date :
                    </label>
                    <Input type="date" value={data.start} />
                </div>
                <div className="number-edit">
                    <div className="div-edit-num">
                        <label>
                            <SlPeople className="purple" />
                            Adult :
                        </label>
                        <Input type="number" value={data.adult} />
                    </div>
                    <div className="div-edit-num">
                        <label>
                            <MdChildCare className="pink" />
                            Childen :
                        </label>
                        <Input type="number" value={data.children} />
                    </div>
                </div>
                {/* <label>Status : {data.statuss}</label> */}
                <h1 className="right">Total price : {data.price} $</h1>
                <button className="btn-submit">Submit</button>
            </form>
        </div>
    );
};

export default EditTour;
