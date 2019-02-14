import React from "react";
import NavBar from "./navbar";
// import Send from "./modal-send";

class addBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Author: "",
            ISBN: "",
            Language: "",
            Hardcover: false,
            Ebook: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Prend en compte les changements d'état des inputs
    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
        console.log(this.state[name]);
    }

    handleSubmit(event) {
        alert(`Title Book: ${this.Title.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <div className="addbookform">
                <NavBar className="navbar-addbook" />
                <form>
                    <label>
                        {"Title :"}
                        <input
                            name="Title"
                            type="text"
                            value={this.state.Title}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        {"Author :"}
                        <input
                            name="Author"
                            type="text"
                            value={this.state.Author}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        {"ISBN :"}
                        <input
                            name="ISBN"
                            type="text"
                            value={this.state.ISBN}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        {"Language (FR/ENG) :"}
                        <input
                            name="Language"
                            type="text"
                            value={this.state.Language}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        {"Hardcover :"}
                        <input
                            name="Hardcover"
                            type="checkbox"
                            checked={this.state.Hardcover}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        {"Ebook :"}
                        <input
                            name="Ebook"
                            type="checkbox"
                            checked={this.state.Ebook}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default addBook;
