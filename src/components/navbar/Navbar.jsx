import React from "react";
import Button from "../../UI/button/Button";
import { ScNavbar } from "./navbar.styled";

const Navbar = () => {
    return (
        <ScNavbar>
            <h1>GENIUS</h1>
            <h1>not so</h1>
            <h1>really??</h1>
            <Button>just button</Button>
            <Button brand>brand button</Button>
            <Button outline> outline button</Button>
        </ScNavbar>
    );
};

export default Navbar;
