import React from "react";
import ReactModal from "react-modal";
import ReviewForm from "./addReview-form";
import Close from "./modal-close";

class WriteReview extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ReactModal
                    isOpen={this.props.isOpen}
                    contentLabel="Minimal Modal Example"
                    className="writeReview"
                    overlayClassName="overlayNewReview">
                    <Close onClick={this.props.close} />
                    <ReviewForm />
                </ReactModal>
            </div>
        );
    }
}

export default WriteReview;
