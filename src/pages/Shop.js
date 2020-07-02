import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
    useEffect(() => {
        fetchJokes();
    }, []);

    const [jokes, setJokes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchJokes = async () => {
        const data = await fetch(
            "https://api.icndb.com/jokes/random/10?exclude=[explicit]"
        );
        const jokes = await data.json();
        setJokes(jokes.value);
        setIsLoading(false);
    };

    return (
        <div className="shop-container">
            <h1>Click on a joke for a fun surprise!</h1>

            {isLoading ? <div>Loading...</div> : (
                <div className="joke-container">
                    {jokes.map((joke) => (
                        <Link
                            key={joke.id}
                            to={`/projects/jokemon/shop/${joke.id}`}
                        >
                            <div className="joke-link">
                                {joke.joke.split("&quot;").join('"')}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
