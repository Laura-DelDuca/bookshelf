import React from "react";
import ReactDOM from "react-dom";
import "./../styles/app.css";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Library from "./components/Library";
import Description from "./components/description-book";
import UserPage from "./components/user-page";
import Login from "./components/Login";
import addBook from "./components/addBook-form";
import addUser from "./components/addUser-form";

export default class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/library" component={Library} />
                        <Route path="/user" component={UserPage} />
                        <Route path="/description" component={Description} />
                        <Route path="/addbook" component={addBook} />
                        <Route path="/adduser" component={addUser} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Routing />, document.getElementById("app"));
