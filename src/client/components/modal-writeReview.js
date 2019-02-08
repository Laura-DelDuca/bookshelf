import React from "react";
import ReactModal from "react-modal";
import ReviewForm from "./addReview-form";

class WriteReview extends React.Component {
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
            <div>
                <button onClick={this.handleOpenModal}>{"Open Modal"}</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    className="writeReview"
                    overlayClassName="overlayNewReview">
                    <ReviewForm />
                    <button id="closemodal">{"Close"}</button>
                </ReactModal>
            </div>
        );
    }
}

export default WriteReview;
