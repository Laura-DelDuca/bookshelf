import React from "react";
import LogoLibrary from "./navbar-library";
import LogoUser from "./navbar-user";
import LogOut from "./navbar-logout";

class NavBar extends React.Component {
    render() {
        return (
            <div id="divnavbar">
                <div id="library">
                    <LogoLibrary />
                </div>
                <div id="user">
                    <LogoUser />
                </div>
                <div id="logout">
                    <LogOut />
                </div>
            </div>
        );
    }
}

export default NavBar;
