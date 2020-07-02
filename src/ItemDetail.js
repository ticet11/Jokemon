import React, { useState, useEffect } from "react";

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
        <div className='pokemon-container'>
            <h1>A wild pokemon appears!</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="pokemon-card">
                    <img src={joke.sprites.front_default} alt="" />
                    <h2>
                        {joke.name.charAt(0).toUpperCase() +
                            joke.name.slice(1)}{" "}
                        uses {joke.moves[0].move.name}!
                    </h2>
                </div>
            )}
        </div>
    );
}
