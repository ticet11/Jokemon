import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to='/projects/jokemon/'>
                    <li>Home</li>
                </Link>
                <Link to='/projects/jokemon/about'>
                    <li>About</li>
                </Link>
                <Link to='/projects/jokemon/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

