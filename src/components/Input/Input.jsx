import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div>
      <input
        className="input-form"
        style={{ width: `${props.width}%` }}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
