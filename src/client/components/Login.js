import * as React from "react";
import Logo from "./Login-logo";
import Loginbutton from "./Login-connection";

export default class Login extends React.Component {
    render() {
        return (
            <div className="container_login">
                <div className="header_login">
                    <Logo />
                </div>
                <div className="input_area">
                    <input className="login_input" placeholder="Login" />
                    <input className="login_input" placeholder="Password" />
                </div>
                <div className="btn_area">
                    <button className="connection_btn">
                        <Loginbutton />
                    </button>
                </div>
                <div className="footer_login">
                    <p>{"2019 - BeCode©"}</p>
                </div>
            </div>
        );
    }
}
