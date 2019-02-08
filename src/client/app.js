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

import Library from "./components/Library.js";
ReactDOM.render(<Library />, document.querySelector("#app"));
