/* becodeorg/bookshelf
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";
import "./../styles/app.css";
// import NavBar from "./components/NavBar";
import WriteReview from "./components/modal-writeReview";

// ReactDOM.render(<NavBar />, document.querySelector("#app"));
ReactDOM.render(<WriteReview />, document.querySelector("#app"));
