import React from "react";
import Image from "../images/close.png";

class Close extends React.Component {
    render() {
        return (
            <button className="closebtn" onClick={this.props.onClick}>
                <img className="closelogo" src={Image} />
            </button>
        );
    }
}

export default Close;
