import React from "react";
import bookLogin from "../images/loginbook.png";

class LoginBookImg extends React.Component {
    render() {
        return (
            <div id="logo">
                <img className="loginbook" src={bookLogin} alt="Logo" />
            </div>
        );
    }
}

export default LoginBookImg;
