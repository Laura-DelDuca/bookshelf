import React from "react";
import loginbutton from "../images/login.png";

class Loginbutton extends React.Component {
    render() {
        return (
            <div id="loginbutton">
                <img
                    src={loginbutton}
                    className="connection_img"
                    alt="Connection Button"
                />
            </div>
        );
    }
}

export default Loginbutton;
