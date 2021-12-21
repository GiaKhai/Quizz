import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../page/Login";
import Header from "./Header";

export default class App extends Component {
    render() {
        return (
            // <BrowserRouter>
            <div>
                {/* <Header /> */}
                <Login />
            </div>
            // </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
