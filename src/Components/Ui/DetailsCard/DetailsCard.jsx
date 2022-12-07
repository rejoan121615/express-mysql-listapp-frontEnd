import React from "react";
import { MemberList } from "../../Page/AllMember/AllMember";
import MemberCard from "../MemberCard/MemberCard";

const DetailsCard = (props) => {
    return (
        <div className=" w-full pb-20  ">
            <div className=" grid grid-cols-[1fr_1fr_1.5fr] gap-x-3">
                <img src={props.img} alt="" />
                <div className=" p-4 ">
                    <h3 className=" font-sans text-xl font-medium mb-4 ">
                        {props.name}
                    </h3>
                    {/* details page  */}
                    <p className=" font-sans text-base ">
                        Hello, My name is{" "}
                        <span className=" font-medium">{props.name}</span>. I am
                        leaving with my room mates. They are really amazing and
                        and awesome. Thanks you so much.
                    </p>
                </div>
            </div>

            {/* room mates list  */}
            <div>
                <h3 className=" sec-title text-[25px] ">All Roomates List</h3>
                <div className=" grid grid-cols-4 gap-x-4">
                    {MemberList.map((member, index) => {
                        return <MemberCard key={index} {...member} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
