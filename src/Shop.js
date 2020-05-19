import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./App.css";

export default function Shop() {
    useEffect(() => {
        fetchJokes();
    }, []);

    const [jokes, setJokes] = useState([]);

    const fetchJokes = async () => {
        const data = await fetch(
            "http://api.icndb.com/jokes/random/10"
        );
        const jokes = await data.json();
        setJokes(jokes.value);
    };
    return (
        <div>
            {jokes.map((joke) => (
                <p key={joke.id}>
                    <Link to={`/shop/${joke.id}`}>{joke.joke}</Link>
                </p>
            ))}
        </div>
    );
}
