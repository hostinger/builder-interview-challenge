// https://docs.cypress.io/api/introduction/api.html

describe('Pokemon list', () => {
	it('Visits the app root url', () => {
		cy.visit('/');
		cy.contains('h1', 'Pokedex');
	});
});
