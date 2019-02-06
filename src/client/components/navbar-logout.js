import React from "react";
import Image from "../images/logout.png";

class LogOut extends React.Component {
    render() {
        return (
            <div>
                <img className="navbarItems" id="logOut" src={Image} />
            </div>
        );
    }
}

export default LogOut;
