import * as React from "react";
import NavBar from "./navbar";
import Booklist from "./Library_Availablebooks";

export default class Library extends React.Component {
    render() {
        return (
            <div className="container_library">
                <div className="navbar_library">
                    <NavBar />
                </div>
                <div className="titleavailable_library">
                    <h2>{"Available books"}</h2>
                </div>
                <div className="available_library">
                    <Booklist />
                </div>
                <div className="titleborrowed_library">
                    <h2>{"Borrowed books"}</h2>
                </div>
                <div className="borrowed_library">
                    <ul>
                        <li>{"Livre 1"}</li>
                        <li>{"Livre 2"}</li>
                        <li>{"Livre 3"}</li>
                    </ul>
                </div>
            </div>
        );
    }
}
