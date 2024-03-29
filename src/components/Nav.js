import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			<h3>Logo</h3>
			<ul className="nav-links">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/about">
					<li>About</li>
				</Link>
				<Link to="/shop">
					<li>Shop</li>
				</Link>
			</ul>
		</nav>
	);
}
