import React from "react";
import Classess from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className=" py-3 w-full shadow-lg ">
            <div className="container mx-auto px-3 flex items-center justify-between">
                {/* brand logo      */}
                <h3 className=" text-4xl text-red-900 uppercase font-sans">record</h3>
                {/* navigation  */}
                <ul className={Classess.nav}>
                    <li className={Classess.nav__item}>
                        <a href="" className={Classess.nav__link}>
                            Add New Member
                        </a>
                    </li>
                    <li className={Classess.nav__item}>
                        <a href="" className={Classess.nav__link}>
                            All Member
                        </a>
                    </li>
                    <li className={Classess.nav__item}>
                        <a href="" className={Classess.nav__link}>
                            Manage Member
                        </a>
                    </li>
                </ul>
                {/* user area  */}
                <ul className={Classess.nav}>
                    <li className={Classess.nav__item}>
                        <a className={Classess.nav__link} href="">Log-in</a>
                    </li>
                    <li className={Classess.nav__item}>
                        <a className={Classess.nav__link} href="">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
