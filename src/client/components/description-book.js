import React from "react";
import NavBar from "./navbar";
import Button from "./btn";

class Description extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({showModal: true});
    }

    handleCloseModal() {
        this.setState({showModal: false});
    }
    render() {
        return (
            <div>
                <div>
                    <NavBar />
                </div>
                <div>
                    <Button onClick={this.handleOpenModal} />
                </div>
            </div>
        );
    }
}

export default Description;
