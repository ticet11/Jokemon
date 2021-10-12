import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ItemDetail from "./pages/ItemDetail";
import Nav from "./components/Nav";
import About from "./pages/About";
import Shop from "./pages/Shop";

import "./styles/Main.scss";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/shop" exact component={Shop} />
					<Route path="/shop/:id" component={ItemDetail} />
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => (
	<div>
		<h1>Home</h1>
		<p>The only good content is in the shop.</p>
	</div>
);

export default App;
