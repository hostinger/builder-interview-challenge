import { onMount, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PokemonList.module.css";

const PokemonList = () => {
	const allPokemon = useState(null);

	// onMount(() => {
	// 	Fetch pokemon
	// });

	return (
		<div className={styles.list}>
			<Link to="/pokemon/name" className={styles.card}>
				<img className={styles.image} />
				<h2 className={styles.name}></h2>
				{/* <svg
				viewBox="0 0 300 275"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				className={styles.star}
			>
				<polygon
					fill={pokemon.favorite ? "#eee" : "none"}
					stroke="#eee"
					stroke-width="20"
					points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111"
				/>
			</svg> */}
			</Link>
		</div>
	);
};

export default PokemonList;
