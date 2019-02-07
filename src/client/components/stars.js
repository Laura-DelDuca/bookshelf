import React from "react";
import Image from "../images/fullstar.png";

class Stars extends React.Component {
    render() {
        return (
            <div>
                <img className="stars" src={Image} />
            </div>
        );
    }
}

export default Stars;
