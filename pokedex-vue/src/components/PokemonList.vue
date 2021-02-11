<template>
	<div class="list">
		<div class="card">
			<img class="image" />
			<h2 class="name" />
			<!-- <svg
				viewBox="0 0 300 275"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				class="star"
			>
				<polygon
					:fill="pokemon.favorite ? '#eee' : 'none'"
					stroke="#eee"
					stroke-width="20"
					points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111"
				/>
			</svg> -->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			allPokemon: null,
		};
	},
};
</script>

<style lang="scss" scoped>
.list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
	grid-gap: 20px;
	justify-items: stretch;
	max-width: 800px;
	margin: 0 auto;
}

.card {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #dc6464;
	border-radius: 32px;
	box-shadow: 6px 6px 10px rgba(160, 73, 73, 0.5),
		-6px -6px 10px rgba(230, 146, 146, 0.5);
}

.image {
	max-width: 150px;
}

.name {
	margin-bottom: 10px;
	color: #eee;
	text-align: center;
	text-transform: capitalize;
}

.star {
	width: 40px;
	padding: 10px;
	margin-bottom: 20px;
	border-radius: 40px;
	box-shadow: 6px 6px 10px rgba(160, 73, 73, 0.5),
		-6px -6px 10px rgba(230, 146, 146, 0.5);

	&:active {
		box-shadow: 3px 3px 7px rgba(160, 73, 73, 0.5) inset,
			-3px -3px 7px rgba(230, 146, 146, 0.5) inset;
	}
}
</style>
