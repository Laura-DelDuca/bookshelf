import * as React from "react";
import {Link} from "react-router-dom";
import Logo from "./Login-logo";
import LoginBookImg from "./Login-image";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Password: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
        console.log(this.state[name]);
    }
    render() {
        return (
            <div className="container_login">
                <div className="header_login">
                    <Logo />
                    <LoginBookImg className="loginbook" />
                </div>
                <div className="input_area">
                    <form>
                        <input
                            className="login_input"
                            type="text"
                            name="Username"
                            placeholder="Login"
                            value={this.state.Username}
                            onChange={this.handleInputChange}
                        />
                        <input
                            className="login_input"
                            type="password"
                            name="Password"
                            placeholder="Password"
                            value={this.state.Password}
                            onChange={this.handleInputChange}
                        />
                        {/* <button className="connection_btn">
                            <Link to="/library"> {"Go"} </Link>
                        </button> */}
                    </form>
                    <button className="connection_btn">
                        <Link to="/library"> {"Go !"} </Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;
