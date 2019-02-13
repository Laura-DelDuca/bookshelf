import * as React from "react";
import Booklist from "./Library_Availablebooks";
import NavBar from "./navbar";
import {Link} from "react-router-dom";

export default class Library extends React.Component {
    render() {
        return (
            <div className="container_library">
                <div className="navbar_library">
                    <NavBar />
                </div>
                <div className="titleavailable_library">
                    <h2>{"Available Books"}</h2>
                    <Link to="/addbook">{"(Add a Book)"}</Link>
                    <div className="underline" />
                </div>
                <div className="available_library">
                    <Booklist />
                </div>
                <div className="titleborrowed_library">
                    <h2>{"Borrowed Books"}</h2>
                    <div className="underline" />
                </div>
                <div className="borrowed_library">
                    <ul>
                        <Booklist />
                    </ul>
                </div>
            </div>
        );
    }
}
