import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Shop() {
	useEffect(() => {
		fetchJokes();
	}, []);

	const [jokes, setJokes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchJokes = async () => {
		const jokes = [];
		for (let i = 0; i < 10; i++) {
			const data = await fetch(
				"https://cors-proxy.briankozub.workers.dev/?url=https://api.chucknorris.io/jokes/random?category=dev"
			);
			const res = await data.json();
			const dateString = res.created_at;
			const id = Number(dateString.slice(-3));
			const jokeObj = {
				id,
				joke: res.value
			};
			jokes.push(jokeObj);
		}
		setJokes(jokes);
		setIsLoading(false);
	};

	return (
		<div className="shop-container">
			<h1>Click on a joke for a fun surprise!</h1>
			<h3>Sorry if you were hoping to buy something.</h3>

			{isLoading ? (
				<div>Loading...</div>
			) : (
				<div className="joke-container">
					{jokes.map((joke) => (
						<Link key={joke.id} to={`/shop/${joke.id}`}>
							<div className="joke-link">{joke.joke.split("&quot;").join('"')}</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
