import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div id="brand">
                <a href="/">MyCompany</a>
            </div>
            <nav>
                <Link className="link" to="/user">
                    User
                </Link>
            </nav>
        </header>
    );
};

export default Header;
