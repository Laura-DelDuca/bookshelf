import React from "react";
import {Link} from "react-router-dom";
import LogoLibrary from "./navbar-library";
import LogoUser from "./navbar-user";
import LogOut from "./navbar-logout";

class NavBar extends React.Component {
    render() {
        return (
            <div id="divnavbar">
                <div id="library">
                    <Link to="/library">
                        {" "}
                        <LogoLibrary />{" "}
                    </Link>
                </div>
                <div id="user">
                    <Link to="/user">
                        {" "}
                        <LogoUser />
                    </Link>
                </div>
                <div id="logout">
                    <Link to="/login">
                        {" "}
                        <LogOut />
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavBar;
