import React from "react";
import Image from "../images/close.png";

class Close extends React.Component {
    render() {
        return (
            <div id="divcloselogo">
                <button onClick={this.props.onClick}>
                    <img id="closelogo" src={Image} />
                </button>
            </div>
        );
    }
}

export default Close;
