// import * as React from "react";
// import ReactDOM from "react-dom";
// import "./../styles/app.css";

// import Description from "./components/description-book.js";
// ReactDOM.render(<Description />, document.querySelector("#app"));
import React from "react";
import ReactDOM from "react-dom";
import "./../styles/app.css";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Library from "./components/Library";
import Description from "./components/description-book";
import UserPage from "./components/user-page";
import Login from "./components/Login";

export default class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Description} />
                        <Route path="/library" component={Library} />
                        <Route path="/user" component={UserPage} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Routing />, document.getElementById("app"));
