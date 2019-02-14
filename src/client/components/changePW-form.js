import React from "react";
class ChangePWForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPW: "",
            NewReview: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        // target = input
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
        console.log(this.state[name]);
    }

    // handleSubmit(event) {
    //     alert("sent");
    //     event.preventDefault();
    // }

    render() {
        return (
            <div>
                <form>
                    <p>{"Enter new password"}</p> <br />
                    <input
                        id="newPW"
                        name="newPW"
                        placeholder="Your new password"
                        value={this.state.newPW}
                        onChange={this.handleInputChange}
                    />{" "}
                    <button id="btnPW">{"OK"}</button>
                </form>
            </div>
        );
    }
}

export default ChangePWForm;
