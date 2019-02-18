import React from "react";

class Borrow extends React.Component {
    render() {
        return (
            <div>
                <p>{"This book is available"}</p>
                <button id="borrowbtn">{"Borrow"}</button>
            </div>
        );
    }
}

export default Borrow;
