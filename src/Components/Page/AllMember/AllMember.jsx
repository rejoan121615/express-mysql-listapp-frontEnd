import React from "react";
import MemberCard from "../../Ui/MemberCard/MemberCard";
import { Outlet } from "react-router-dom";
export const MemberList = [
    {
        id: 1,
        name: "Mohd Rejoan",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    },
    {
        id: 2,
        name: "Saddam Hafiz alif",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    },
    {
        id: 3,
        name: "Sohag vi",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    },
    {
        id: 4,
        name: "Hasnat vai",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    },
];

const AllMember = () => {
    return (
        <section className=" pageHeight">
            <div className="container">
                <h3 className=" sec-title">All member</h3>
                {/* member container  */}
                <div className=" max-w-[1400px] mx-auto grid grid-cols-4 gap-5 ">
                    {MemberList.map((member, index) => {
                        return <MemberCard key={index} {...member} />;
                    })}
                </div>

                <Outlet />
            </div>
        </section>
    );
};

export default AllMember;
