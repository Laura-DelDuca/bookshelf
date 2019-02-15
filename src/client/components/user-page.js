import React from "react";
import {Link} from "react-router-dom";
import NavBar from "./navbar";
import Reader from "./reader-logo";
import MyBorrowedBooks from "./area-borrowedBooks";
import MyReviews from "./area-myReviews";
import ChangePW from "./modal-changePW";

class UserPage extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div id="userpage">
                <div className="navbar-userpage">
                    <NavBar />
                </div>

                <div id="divReaderImage">
                    <Reader />
                    <button className="btnPW" onClick={this.handleOpenModal}>
                        {"Change Password"}
                    </button>
                    <div id="onlyForCoachs">
                        <p id="privileges">{"Coachs' privileges:"}</p> <br />
                        <Link to="/addbook" className="coachbtns">
                            {"Add a Book"}
                        </Link>
                        <Link to="/adduser" className="coachbtns">
                            {"Add a User"}
                        </Link>
                    </div>
                </div>

                <div className="areaUser">
                    <div id="myBorrowedBooks">
                        <MyBorrowedBooks />
                    </div>
                    <div id="myReviews">
                        <MyReviews />
                    </div>
                    <ChangePW
                        close={this.handleCloseModal}
                        isOpen={this.state.showModal}
                    />
                </div>
            </div>
        );
    }
}

export default UserPage;
