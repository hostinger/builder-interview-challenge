<template>
	<div class="block">
		<div class="element"></div>
	</div>
</template>

<style>
@import "./assets/base.css";

.block {
	display: grid;
	margin: 0 auto;
	border: 1px dashed var(--color-border);
}

.element {
	border: 1px solid var(--color-border);
	padding: 0 5px;
}
</style>