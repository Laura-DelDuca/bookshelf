import React from "react";
import Image from "../images/logoLibrary.png";

class LogoLibrary extends React.Component {
    render() {
        return (
            <div>
                <img className="navbarItems" id="logoLibrary" src={Image} />
            </div>
        );
    }
}

export default LogoLibrary;
