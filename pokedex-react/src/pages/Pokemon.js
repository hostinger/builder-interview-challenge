import styles from "./Pokemon.module.css";

const Pokemon = ({ pokemon }) => {
	if (!pokemon) {
		return (
			<div className={styles.info}>
				<h2>Pokemon not found</h2>
			</div>
		);
	}

	return (
		<div className={styles.info}>
			<div className={styles.images}>
				<img
					className={styles.image}
					src={pokemon.sprites.front_default}
					alt="pokemon front"
				/>
				<img
					className={styles.image}
					src={pokemon.sprites.back_default}
					alt="pokemon back"
				/>
			</div>
			<h2 className={styles.name}>{pokemon.name}</h2>
			<div className={styles.types}>
				<div className={styles.type} />
			</div>
			<table className={styles.stats} />
		</div>
	);
};

export default Pokemon;
