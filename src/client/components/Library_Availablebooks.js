import * as React from "react";
import {books} from "./databasetest";

export default class Booklist extends React.Component {
    render() {
        const listBook = books.map(book => {
            return (
                <li key={book.id} className="book">
                    <h3>{book.name}</h3>
                    <h4>{book.author}</h4>
                </li>
            );
        });

        return (
            <div className="App">
                <div>{listBook}</div>
            </div>
        );
    }
}
