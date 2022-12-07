import React from "react";
import Navbar from "../Ui/Navbar/Navbar";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <Navbar />
            <div>
                <h1 className=" text-center font-sans text-6xl ">
                    {error.status}
                </h1>
                <h1 className=" text-center font-sans text-xl text-black">
                    {error.data}
                </h1>
            </div>
        </div>
    );
};

export default Error;
