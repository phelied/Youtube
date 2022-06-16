import React, { useState } from "react";
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
    const [sideBar, setSideBar] = useState(false)

    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <div className="Menu">
                    <div className="">
                        <span>Menu</span>
                        <ul>
                            <li>
                                <img src="https://img.icons8.com/fluency-systems-regular/48/undefined/home.png" />
                                <span>Home</span>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/fluency-systems-regular/48/undefined/home.png" />
                                <span>Discover</span>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/fluency-systems-regular/48/undefined/home.png" />
                                <span>Likes</span>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/fluency-systems-regular/48/undefined/home.png" />
                                <span>Podcast</span>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/fluency-systems-regular/48/undefined/home.png" />
                                <span>Radio</span>
                            </li>
                            <li>
                                <img src="https://img.icons8.com/fluency-systems-regular/48/undefined/home.png" />
                                <span>Profile</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="Collection">
                    <div className="">
                        <span>Collection</span>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-regular/48/undefined/home.png" />
                            <span>Favorite Songs</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-regular/48/undefined/home.png" />
                            <span>Artists</span>
                        </li>
                        <li>
                            <img src="https://img.icons8.com/fluency-systems-regular/48/undefined/home.png" />
                            <span>Albums</span>
                        </li>
                    </div>
                </div>
            </div>
            <span onClick={openNav}>&#9776; open</span>
            <div id="main">
                <h2>Sidenav Push Example</h2>
            </div>
        </div>
    )
}

export default Navbar;