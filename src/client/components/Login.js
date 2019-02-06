import * as React from "react";
import Logo from "./Login-logo";
import Loginbutton from "./Login-connection";

export default class Login extends React.Component {
    render() {
        return (
            <div className="container_login">
                <div className="login_item-1">
                    <Logo />
                </div>
                <div className="login_item-2">
                    <input className="login_input" placeholder="Login" />
                    <input className="login_input" placeholder="Password" />
                    <button className="connection">
                        <Loginbutton />
                    </button>
                </div>
            </div>
        );
    }
}
