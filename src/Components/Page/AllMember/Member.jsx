import React from "react";
import { useLocation, Link } from "react-router-dom";
import DetailsCard from "../../Ui/DetailsCard/DetailsCard";
import { RiArrowGoBackFill } from "react-icons/ri";

const GoBackBtn = () => {
    return (
        <div>
            <Link to={'/all-member'} className="  w-10 h-10 flex items-center justify-center bg-slate-600 rounded-lg ">
                <RiArrowGoBackFill className=" text-white text-xl" />
            </Link>
        </div>
    );
};

const Member = (props) => {
    const { state } = useLocation();
    return (
        <section className=" h-pageHeight ">
            <div className=" container ">
                <h3 className=" sec-title">Member details</h3>
                <div className=" grid grid-cols-[50px_1fr] gap-x-12  ">
                    <GoBackBtn />
                    {/* details card  */}
                    <DetailsCard {...state} />
                </div>
            </div>
        </section>
    );
};

export default Member;
