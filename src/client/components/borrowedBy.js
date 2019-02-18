import React from "react";

class BorrowedBy extends React.Component {
    render() {
        return (
            <div>
                <p>{"This book is not available"}</p>
                <button id="returnBtn">{"Return book"}</button>
            </div>
        );
    }
}

export default BorrowedBy;
