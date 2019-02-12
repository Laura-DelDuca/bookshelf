import React from "react";
import NavBar from "./navbar";

class UserPage extends React.Component {
    render() {
        return (
            <div id="userpage">
                <div className="navbar-userpage">
                    <NavBar />
                </div>
            </div>
        );
    }
}

export default UserPage;
