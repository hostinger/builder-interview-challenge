<template>
	<div>
		<h1 class="title">
			Pokedex
		</h1>
		<router-view />
	</div>
</template>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: #dc6464;
  color: #eee;
  margin: 0;
  padding: 20px;
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
