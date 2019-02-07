import React from "react";
import Image from "../images/fullstar.png";

class Stars extends React.Component {
    render() {
        return (
            <div id="stars">
                <img className="stars" src={Image} />
                <img className="stars" src={Image} />
                <img className="stars" src={Image} />
                <img className="stars" src={Image} />
                <img className="stars" src={Image} />
            </div>
        );
    }
}

export default Stars;
