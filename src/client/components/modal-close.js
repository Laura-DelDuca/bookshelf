import React from "react";
import Image from "../images/close.png";

class Close extends React.Component {
    render() {
        return (
            <button id="closebtn" onClick={this.props.onClick}>
                <img id="closelogo" src={Image} />
            </button>
        );
    }
}

export default Close;
