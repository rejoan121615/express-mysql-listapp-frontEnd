import React, { useState } from "react";
import useInput from "../../Hooks/useInput";

const AddNewMember = () => {
    const [name, nameHandler] = useInput();
    const [email, emailHandler] = useInput();
    const [phoneNumber, phoneNumberHandler] = useInput();
    const [file, fileHandler] = useInput();

    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            name,
            email,
            phoneNumber,
            file,
        };

        // post data
        const myHeader = new Headers();
        myHeader.append("Content-type", "application/json");

        fetch("http://localhost:3005/new-user", {
            method: "POST",
            headers: myHeader,
            body: JSON.stringify(userData),
            redirect: "follow",
        })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log("got an error");
            });
    };

    return (
        <div className=" h-pageHeight">
            {/* <div className=" w-[400px] mx-auto flex items-center justify-center h-full ">
                <form
                    method="post"
                    encType="multipart/form-data"
                    action="success"
                    className=" w-full grid grid-cols-1 gap-y-4 "
                    onSubmit={submitHandler}
                >
                    <div className=" flex flex-col gap-y-2 ">
                        <label className={Classess.label} htmlFor="name">
                            Name
                        </label>
                        <input
                            className={`${Classess.input}`}
                            type="text"
                            name="full__name"
                            value={name}
                            onChange={nameHandler}
                        />
                    </div>
                    <div className=" flex flex-col gap-y-2 ">
                        <label className={Classess.label} htmlFor="email">
                            Email
                        </label>
                        <input
                            className={Classess.input}
                            type="email"
                            name="email__id"
                            value={email}
                            onChange={emailHandler}
                        />
                    </div>
                    <div className=" flex flex-col gap-y-2 ">
                        <label
                            className={Classess.label}
                            htmlFor="phone number"
                        >
                            Phone Number:
                        </label>
                        <input
                            className={Classess.input}
                            type="number"
                            name="phone__number"
                            value={phoneNumber}
                            onChange={phoneNumberHandler}
                        />
                    </div>
                    <div className=" flex flex-col gap-y-2 ">
                        <label className={Classess.label} htmlFor="photo">
                            Your most recent photo
                        </label>
                        <input
                            className={Classess.input}
                            type="file"
                            name="profile__img"
                            value={file}
                            onChange={fileHandler}
                        />
                    </div>

                    <div>
                        <input
                            type="submit"
                            value="submit"
                            className=" mt-4 cursor-pointer px-4 py-2 bg-slate-700 text-white
                             font-semibold font-sans capitalize tracking-[0.8px]
                              rounded-md "
                        />
                    </div>
                </form>
            </div> */}
        </div>
    );
};

export default AddNewMember;
