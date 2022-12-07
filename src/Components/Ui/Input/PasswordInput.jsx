import React, { useState } from "react";
import CloseEyeIcon from "../../../assets/photo.png";
import OpenEyeIcon from "../../../assets/eye.png";
import useInput from "../../../Hooks/useInput";

const Password = (props) => {
    const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");
  

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    props.change(e);
  }
  
  const passShowHideHandler = (e) => {
    e.preventDefault();
    setShowPass(!showPass)
  }
    return (
        <div className=" inputWrap ">
            <label className="label" htmlFor="name">
                Password
            </label>
            <div className=" relative ">
                <input
                    className=" input "
                    type={showPass ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={passwordHandler}
                />
                <button
                    onClick={passShowHideHandler}
                    className=" w-5 h-5 absolute right-3 top-2"
                >
                    {showPass ? (
                        <img src={CloseEyeIcon} alt="password icon" />
                    ) : (
                        <img src={OpenEyeIcon} alt="password icon" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Password;
