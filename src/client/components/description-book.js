import React from "react";
import NavBar from "./navbar";
import WriteReview from "./modal-writeReview";

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

    componentDidMount() {
        console.log(this.props);
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
                    <p id="ISBN">{this.props.location.book.ISBN}</p>
                </div>
                <div className="aboutthebook">
                    <p>{this.props.location.book.author}</p>
                    <p>{"Format"}</p>
                    <p>{"Available"}</p>
                    <button id="borrowbtn">{"Borrow"}</button>
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
