import React from "react";
import Image from "../images/user.png";

class LogoUser extends React.Component {
    render() {
        return (
            <div>
                <img className="navbarItems" id="userbtn" src={Image} />
            </div>
        );
    }
}

export default LogoUser;
