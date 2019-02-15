import * as React from "react";
import {books} from "./databasetest";

export default class Booklist extends React.Component {
    render() {
        const listBook = books.map(book => {
            return (
                <a href="#">
                    <li key={book.id}>
                        <img src={book.img} alt="Book Cover" />
                        <h3>{book.title}</h3>
                    </li>
                </a>
            );
        });

        return <div className="book">{listBook}</div>;
    }
}
