import React from "react";
import { ScNavbar } from "./navbar.styled";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
    return (
        <ScNavbar>
            <div className="logoContainer">
                <span className="logo">Buypedia</span>
            </div>
            <div className="logoLinks">
                <p>Login</p>
                <span>
                    <BsCart4 />
                </span>
            </div>
        </ScNavbar>
    );
};

export default Navbar;
