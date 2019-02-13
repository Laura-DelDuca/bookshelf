import React from "react";
import ReactModal from "react-modal";
import Close from "./modal-close";
import ChangePWForm from "./changePW-form";

class ChangePW extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <ReactModal
                    isOpen={this.props.isOpen}
                    className="changePW"
                    overlayClassName="overlayChangePW">
                    <Close onClick={this.props.close} />
                    <ChangePWForm />
                </ReactModal>
            </div>
        );
    }
}

export default ChangePW;
