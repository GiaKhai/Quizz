import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../router";

const App = () => {
    return (
        <Router>
            <div>
                <Routes />
            </div>
        </Router>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
