import React from "react";
import Search from "./search";
import ListNavBar from "./listNavBar";
import './navbar.css';

const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}

const Navbar = () => {

    return (
        <div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            <span onClick={openNav}>&#9776; open</span>
            <div id="main">
                <h2>Sidenav Push Example</h2>
            </div>
        </div>
    )
}

export default Navbar;