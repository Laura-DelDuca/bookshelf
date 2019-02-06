import React from "react";
import LogoLibrary from "./navbar-library";
import LogoUser from "./navbar-user";
import LogOut from "./navbar-logout";

class NavBar extends React.Component {
    render() {
        return (
            <ul id="navbar">
                <li>
                    <LogoLibrary />
                </li>
                <li>
                    <LogoUser />
                </li>
                <li>
                    <LogOut />
                </li>
            </ul>
        );
    }
}

export default NavBar;
