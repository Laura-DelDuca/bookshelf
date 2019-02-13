import React from "react";
import NavBar from "./navbar";
import Reader from "./reader-logo";
import ChangePW from "./modal-changePW";

class UserPage extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    render() {
        return (
            <div id="userpage">
                <div className="navbar-userpage">
                    <NavBar />
                </div>
                <div id="divReaderImage">
                    <Reader />
                </div>
                <div className="divBtnUser">
                    <button className="btnsUser">{"Borrowed Books"}</button>
                    <br />
                    <button className="btnsUser">{"My Reviews"}</button>
                    <br />
                    <button className="btnsUser" onClick={this.handleOpenModal}>
                        {"Change Password"}
                    </button>
                </div>
                <div>
                    <ChangePW
                        // close={this.handleCloseModal}
                        isOpen={this.state.showModal}
                    />
                </div>
            </div>
        );
    }
}

export default UserPage;
