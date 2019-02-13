import React from "react";
import Image from "../images/Reader.png";

class Reader extends React.Component {
    render() {
        return (
            <div id="logo">
                <img className="bigReader" src={Image} alt="Reader Image" />
            </div>
        );
    }
}

export default Reader;
