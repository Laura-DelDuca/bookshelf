import * as React from "react";
import {books} from "./databasetest";

export default class listBooks extends React.Component {
    render() {
        const BookList = books.map(book => {
            return (
                <li key={book.id}>
                    <h3>{book.title}</h3>
                </li>
            );
        });

        return (
            <div>
                <div>{BookList}</div>
            </div>
        );
    }
}
