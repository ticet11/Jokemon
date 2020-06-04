import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import ItemDetail from './ItemDetail';
import Nav from "./Nav";
import About from "./pages/About";
import Shop from "./pages/Shop";
import "./styles/App.css";
import "./styles/Shop.scss";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path="/projects/jokemon/" component={Home} />
                    <Route path="/projects/jokemon/about" component={About} />
                    <Route path="/projects/jokemon/shop" exact component={Shop} />
                    <Route path='/projects/jokemon/shop/:id' component={ItemDetail} />
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
