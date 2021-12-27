import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div id="brand">
                <a href="/">Quizz</a>
            </div>
            <nav>
                <Link className="link" to="/user">
                    User
                </Link>
                <Link className="link" to="/test-plan">
                    Test Plan
                </Link>
                <Link className="link" to="/question">
                    Question
                </Link>
            </nav>
        </header>
    );
};

export default Header;
