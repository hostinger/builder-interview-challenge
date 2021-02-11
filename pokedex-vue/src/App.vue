<template>
	<div>
		<h1 class="title">
			Pokedex
		</h1>
		<pokemon-list />
	</div>
</template>

<script>
import PokemonList from "@/components/PokemonList.vue";

export default {
	components: {
		PokemonList,
	},
};
</script>

<style>
body {
	padding: 20px;
	margin: 0;
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	color: #eee;
	background-color: #dc6464;
}

h2 {
	margin: 0;
}

a {
	color: #eee;
	text-decoration: none;
}

img {
	display: block;
	width: 100%;
}

.title {
	text-align: center;
}
</style>
