import * as React from "react";
import Booklist from "./Library_Availablebooks";
import BooklistBorrowed from "./Library_Borrowedbooks";
import NavBar from "./navbar";

export default class Library extends React.Component {
    render() {
        return (
            <div className="container_library">
                <div className="navbar_library">
                    <NavBar />
                </div>
                <div className="titleavailable_library">
                    <h2>{"Available Books"}</h2>
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
                        <BooklistBorrowed />
                    </ul>
                </div>
            </div>
        );
    }
}
