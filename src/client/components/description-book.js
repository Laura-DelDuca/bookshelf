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
                <div>
                    <NavBar />
                </div>
                <div>
                    <WriteReview displayed={this.state.showModal} />
                </div>
            </div>
        );
    }
}

export default Description;
