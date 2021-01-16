<template>
  <div>
    <h1 class="title">Pokedex</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

// global styles
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
