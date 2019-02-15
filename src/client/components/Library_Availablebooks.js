import * as React from "react";
import {books} from "./databasetest";
import {Link} from "react-router-dom";
export default class Booklist extends React.Component {
    render() {
        const listBook = books.map(book => {
            return (
                <Link
                    to={{pathname: `/description/${book.id}`, book: book}}
                    key={book.id}>
                    <li key={book.id}>
                        <img src={book.img} alt="Book Cover" />
                        <h3>{book.title}</h3>
                    </li>
                </Link>
            );
        });

        return <div className="book">{listBook}</div>;
    }
}
