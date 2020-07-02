import React, { useState, useEffect } from "react";
import "./styles/App.css";

export default function ItemDetail({ match }) {
    useEffect(() => {
        fetchJoke();
    }, []);

    const [joke, setJoke] = useState({
        sprites: {},
    });

    const [isLoading, setIsLoading] = useState(true);

    const fetchJoke = async () => {
        const fetchJoke = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${match.params.id}/`
        );
        const joke = await fetchJoke.json();
        setJoke(joke);
        setIsLoading(false);
    };
    return (
        <div>
            <h1>A wild pokemon appears!</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h2>{joke.name}</h2>
                    <img src={joke.sprites.front_default} alt="" />
                </div>
            )}
        </div>
    );
}
