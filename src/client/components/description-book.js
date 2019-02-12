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

    render() {
        return (
            <div id="descriptionPage">
                <div id="navbar-descriptionpage">
                    <NavBar />
                </div>
                <div className="booktitle">
                    <h1 id="booktitle">{"Book's Title"}</h1>
                </div>
                <div className="bookcover">
                    <img
                        id="bookcoverimage"
                        src="https://images-na.ssl-images-amazon.com/images/I/61wMJ4uS4QL.jpg"
                    />
                    <p id="ISBN">{"ISBN = 98698943860984"}</p>
                </div>
                <div className="aboutthebook">
                    <p>{"Language"}</p>
                    <p>{"Author"}</p>
                    <p>{"Format"}</p>
                    <p>{"Stars"}</p>
                    <p>{"Available"}</p>
                    <button>{"Borrow"}</button>
                    <WriteReview displayed={this.state.showModal} />
                    <div>
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
