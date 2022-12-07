import React from "react";
import { Link } from "react-router-dom";

const MemberCard = (props) => {
    const address = props.name.replace(/\s/g, "-").toLowerCase();

    return (
        <div className=" border border-[#6c6c6c] shadow-md rounded-md p-5">
            <img
                className=" w-full inline-block rounded-md"
                src={props.img}
                alt="match member img"
            />
            <h4 className=" text-lg font-semibold text-center my-2">
                {props.name}
            </h4>
            <div className=" text-center ">
                <Link
                    onClick={() => window.scrollTo(0, 0)}
                    to={`/all-member/${address}`}
                    state={{ ...props }}
                    className=" px-4 py-2 bg-slate-500 rounded-md text-white font-sans font-medium capitalize inline-block "
                >
                    full details
                </Link>
            </div>
        </div>
    );
};

export default MemberCard;
