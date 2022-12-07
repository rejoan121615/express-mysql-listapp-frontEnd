import React, { useState } from "react";

const Input = (props) => {
    const [values, setValues] = useState("");

    const changeHandler = (e) => {
        setValues(e.target.value);
        props.change(e);
    };

    return (
        <div className="inputWrap">
            <label
                className="label"
                htmlFor={props.label ? props.label : "name"}
            >
                {props.label ? props.label : "name"}
            </label>
            <input
                className=" input "
                name="profile__img"
                type={props.type ? props.type : "text"}
                value={values}
                onChange={changeHandler}
            />
        </div>
    );
};

export default Input;
