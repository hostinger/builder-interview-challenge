<template>
	<h1 class="title">Pokedex</h1>
	<PokemonList />
</template>

<script setup lang="ts">
import PokemonList from "./components/PokemonList.vue";
</script>

<style>
body {
	padding: 20px;
	margin: 0;
	font-family: "Heebo", Helvetica, Arial, sans-serif;
	background-color: #1f2223;
}

h2 {
	margin: 0;
}

a {
	text-decoration: none;
}

img {
	display: block;
	width: 100%;
}

.title {
	text-align: center;
	color: #fff;
	font-weight: 300;
	font-size: 58px;
}
</style>
