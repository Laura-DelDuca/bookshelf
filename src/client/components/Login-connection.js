import React from "react";
import loginbutton from "../images/login.png";

class Loginbutton extends React.Component {
    render() {
        return (
            <div id="loginbutton">
                <img
                    src={loginbutton}
                    alt="Connexion Button"
                    className="connexion_btn"
                />
            </div>
        );
    }
}

export default Loginbutton;
