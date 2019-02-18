import React from "react";
import NavBar from "./navbar";
import WriteReview from "./modal-writeReview";
import Borrow from "./borrowBtn";
import BorrowedBy from "./borrowedBy";

class Description extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div id="descriptionPage">
                <div id="navbar-descriptionpage">
                    <NavBar />
                </div>
                <div className="booktitle">
                    <h1 id="booktitle">{this.props.location.book.title}</h1>
                </div>
                <div className="bookcover">
                    <img
                        id="bookcoverimage"
                        src={this.props.location.book.URL}
                    />
                    <p id="ISBN">
                        {"ISBN:"}
                        {this.props.location.book.ISBN}
                    </p>
                </div>
                <div className="aboutthebook">
                    <p>
                        {"By: "}
                        {this.props.location.book.author}
                    </p>
                    <br />
                    <p id="summary">
                        {"About the book: "} <br />
                        {this.props.location.book.summary}
                    </p>
                    <br />
                    <p>
                        {this.props.location.book.hardcover
                            ? "Hardcover ✓"
                            : "Hardcover ✗"}
                    </p>
                    <p>
                        {this.props.location.book.ebook ? "Ebook ✓" : "Ebook ✗"}
                    </p>
                    <br />
                    <p>
                        {this.props.location.book.available ? (
                            <Borrow />
                        ) : (
                            <BorrowedBy />
                        )}
                    </p>
                    <br />
                    <button id="writeamodalbtn" onClick={this.handleOpenModal}>
                        {"Write a Review"}
                    </button>
                    <WriteReview
                        close={this.handleCloseModal}
                        isOpen={this.state.showModal}
                    />
                    <div id="reviewsinabout">
                        <p>{"Reviews:"}</p>
                        <p>{"author"}</p>
                        <p>{"blabla"}</p>
                        <p>{"date"}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Description;
