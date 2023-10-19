import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/drink">Drink</NavLink>
            <NavLink exact to="/eat">Eat</NavLink>
            <NavLink exact to="/sardines">Sardines</NavLink>
        </nav>
    )
}

export default NavBar;