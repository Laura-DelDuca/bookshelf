import React from "react";
import Beshelflogo from "../images/logo.png";

class Logo extends React.Component {
    render() {
        return (
            <div id="logo">
                <img className="logobeshelf" src={Beshelflogo} alt="Logo" />
            </div>
        );
    }
}

export default Logo;
