import React from "react";
import NavBar from "./navbar";
import Reader from "./reader-logo";

class UserPage extends React.Component {
    render() {
        return (
            <div id="userpage">
                <div className="navbar-userpage">
                    <NavBar />
                </div>
                <div>
                    <Reader />
                </div>
                <div className="divBtnUser">
                    <button className="btnsUser">{"Borrowed Books"}</button>
                    <button className="btnsUser">{"My Reviews"}</button>
                    <button className="btnsUser">{"Change Password"}</button>
                </div>
            </div>
        );
    }
}

export default UserPage;
