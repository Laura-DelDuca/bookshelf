import React from "react";
import NavBar from "./navbar";
// import Send from "./modal-send";

class addUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Password: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Prend en compte les changements d'état des inputs
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
        console.log(this.state[name]);
    }

    // handleSubmit(event) {
    //     alert(`Title Book: ${this.Title.value}`);
    //     event.preventDefault();
    // }

    render() {
        return (
            <div className="addbookform">
                <NavBar className="navbar-addbook" />
                <form className="form-addbook">
                    <h3 className="title-addbook">{"Add a User"}</h3>
                    <div className="underline" />
                    <br />
                    <br />
                    <label>
                        <h3 className="title-addbook">{"Username :"}</h3>
                        <input
                            name="Username"
                            type="text"
                            value={this.state.Username}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        <h3 className="title-addbook">{"Password :"}</h3>
                        <input
                            name="Password"
                            type="text"
                            value={this.state.Password}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <br />
                    <input
                        type="submit"
                        className="submit-book"
                        value="Submit"
                    />
                </form>
            </div>
        );
    }
}

export default addUser;
