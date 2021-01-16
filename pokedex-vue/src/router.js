import VueRouter from "vue-router";
import Index from "@/pages/Index.vue";
import Pokemon from "@/components/Pokemon.vue";

export default new VueRouter({
	mode: "history",
	routes: [
		{ path: "/", component: Index },
		{ path: "/pokemon/:name", component: Pokemon, name: 'pokemon' },
	],
});
