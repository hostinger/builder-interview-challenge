import VueRouter from 'vue-router';
import Index from '@/pages/Index.vue';
import PokemonInfo from '@/pages/PokemonInfo.vue';

export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Index },
		{ path: '/pokemon/:name', component: PokemonInfo },
	],
});
