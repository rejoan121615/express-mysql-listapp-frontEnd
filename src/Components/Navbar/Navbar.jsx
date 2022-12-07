import React from "react";
import Classess from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=" py-3 w-full shadow-lg ">
            <div className="container mx-auto px-3 flex items-center justify-between">
                {/* brand logo      */}

                <h3 className=" text-4xl text-red-900 uppercase font-sans">
                    <Link to={'/'}>record</Link>
                </h3>
                {/* navigation  */}
                <ul className={Classess.nav}>
                    <li className={Classess.nav__item}>
                        <NavLink
                            to="/add-new-member"
                            className={Classess.nav__link}
                        >
                            Add New Member
                        </NavLink>
                    </li>
                    <li className={Classess.nav__item}>
                        <NavLink
                            to="/all-member"
                            className={Classess.nav__link}
                        >
                            all member
                        </NavLink>
                    </li>
                    <li className={Classess.nav__item}>
                        <NavLink
                            to="/manage-member"
                            className={Classess.nav__link}
                        >
                            manage member
                        </NavLink>
                    </li>
                </ul>
                {/* user area  */}
                <ul className={Classess.nav}>
                    <li className={Classess.nav__item}>
                        <Link to="/log-in" className={Classess.nav__link}>
                            log in
                        </Link>
                    </li>
                    <li className={Classess.nav__item}>
                        <Link to="/register" className={Classess.nav__link}>
                            register
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
