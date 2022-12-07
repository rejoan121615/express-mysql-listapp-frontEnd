import React from "react";
import useInput from "../../Hooks/useInput";
import CloseEyeIcon from "../../assets/photo.png";
import OpenEyeIcon from "../../assets/eye.png";
import { useState } from "react";

const RegisterPage = () => {
    const [name, nameHandler] = useInput("");
    const [email, emailHandler] = useInput("");
    const [password, passwordHandler] = useInput("");

    const [showPass, setShowPass] = useState(false);

    const submitHandler = (form) => {
        form.preventDefault();
        const userData = JSON.stringify({
            name,
            email,
            password,
        });

        const reqHeader = new Headers();
        reqHeader.append("Content-Type", "application/json");

        fetch("http://localhost:3005/new-user", {
            method: "POST",
            headers: reqHeader,
            body: userData,
        })
            .then((data) => {
                console.log("my data", data);
            })
            .catch((error) => {
                console.log("my error", error);
            });
    };

    const passShowHideHandler = () => {
        setShowPass(!showPass);
    };

    return (
        <section>
            <div className="container">
                <h1 className=" text-center font-bold font-sans text-3xl my-20 ">
                    Register yourself as a user
                </h1>
                <form onSubmit={submitHandler} className=" w-[500px] mx-auto ">
                    <div className=" flex flex-col gap-y-2 mb-4 ">
                        <label className={Classess.label} htmlFor="name">
                            Name
                        </label>
                        <input
                            className={`${Classess.input}`}
                            type="text"
                            name="name"
                            value={name}
                            onChange={nameHandler}
                        />
                    </div>
                    <div className=" flex flex-col gap-y-2 mb-4 ">
                        <label className={Classess.label} htmlFor="name">
                            Email
                        </label>
                        <input
                            className={`${Classess.input}`}
                            type="email"
                            name="email"
                            value={email}
                            onChange={emailHandler}
                        />
                    </div>
                    <div className=" flex flex-col gap-y-2 mb-4 ">
                        <label className={Classess.label} htmlFor="name">
                            Password
                        </label>
                        <div className=" relative ">
                            <input
                                className={`${Classess.input}`}
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
                                    <img
                                        src={CloseEyeIcon}
                                        alt="password icon"
                                    />
                                ) : (
                                    <img
                                        src={OpenEyeIcon}
                                        alt="password icon"
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className=" mt-4 ">
                        <input
                            className=" cursor-pointer px-6 py-3 rounded-md bg-slate-800 text-white uppercase font-sans font-bold"
                            type="submit"
                            value="submit"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RegisterPage;
