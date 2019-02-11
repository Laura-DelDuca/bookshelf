import * as React from "react";
import {books} from "./databasetest";

export default class Booklist extends React.Component {
    render() {
        const listBook = books.map(book => {
            return (
                <div className="listbook">
                    <a href="#">
                        <li key={book.id} className="book">
                            <img src={book.img} alt="Book Cover" />
                            <h3>{book.name}</h3>
                            <h4>{book.author}</h4>
                        </li>
                    </a>
                </div>
            );
        });

        return (
            <div className="App">
                <div>{listBook}</div>
            </div>
        );
    }
}
