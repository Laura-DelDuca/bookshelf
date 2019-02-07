import * as React from "react";
import NavBar from "./NavBar";

export default class Library extends React.Component {
    render() {
        return (
            <div className="container_library">
                <div className="navbar_library">
                    <NavBar />
                </div>
                <div className="titleavailable_library">
                    <h2>{Availablebooks}</h2>
                </div>
                <div className="available_library">
                    <ul>
                        <li>{Livre1}</li>
                        <li>{Livre2}</li>
                        <li>{Livre3}</li>
                    </ul>
                </div>
                <div className="titleborrowed_library">
                    <h2>{Borrowedbooks}</h2>
                </div>
                <div className="borrowed_library">
                    <ul>
                        <li>{Livre1}</li>
                        <li>{Livre2}</li>
                        <li>{Livre3}</li>
                    </ul>
                </div>
            </div>
        );
    }
}
