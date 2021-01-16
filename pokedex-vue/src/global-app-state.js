export const appState = {
    selectedPokemon: undefined,
    persistSelectedPokemon: (pokemon) => {
        localStorage.setItem('selectedPokemon', JSON.stringify(pokemon));
    },
    retrieveSelectedPokemon: () => {
        return JSON.parse(localStorage.getItem('selectedPokemon'));
    },
    clearSelectedPokemon: () => {
        localStorage.removeItem('selectedPokemon');
    }
}

