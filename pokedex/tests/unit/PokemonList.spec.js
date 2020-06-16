import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import PokemonList from '@/components/PokemonList.vue';

describe('PokemonList.vue', () => {
	const wrapper = shallowMount(PokemonList, {
		stubs: ['router-link'],
	});

	it('renders an image', () => {
		expect(wrapper.find('img').exists()).to.be.true;
	});

	it('renders a name', () => {
		expect(wrapper.find('h2').exists()).to.be.true;
	});
});
