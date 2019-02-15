import React from "react";
import Image from "../images/logout.png";

class LogOut extends React.Component {
    render() {
        return (
            <div>
                <img
                    className="navbarItems"
                    id="logoutbtn"
                    src={Image}
                    alt="test"
                />
            </div>
        );
    }
}

export default LogOut;
