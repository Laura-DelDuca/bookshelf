import React from "react";
import Image from "../images/checked.png";

class Send extends React.Component {
    render() {
        return (
            <div id="divsendlogo">
                <img id="sendlogo" src={Image} />
            </div>
        );
    }
}

export default Send;
