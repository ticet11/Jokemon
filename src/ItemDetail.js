import React, { useState, useEffect } from "react";
import "./styles/App.css";

export default function ItemDetail({ match }) {
    useEffect(() => {
        fetchJoke();
    }, []);

    const [joke, setJoke] = useState({
        sprites: {},
    });

    const fetchJoke = async () => {
        const fetchJoke = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${match.params.id}/`
        );
        const joke = await fetchJoke.json();
        setJoke(joke);
    };
    return (
        <div>
            <h1>{joke.name}</h1>
            <img src={joke.sprites.front_default} alt="" />
        </div>
    );
}
