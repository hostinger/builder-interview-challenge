# Pokedex challenge

Let's catch 'em all!

## Project setup
```sh
# Install dependencies
npm install

# Start in development mode
npm start
```

## Quest 1 - Fetch pokemon data

Here, take these Pokeballs – `https://pokeapi.co/api/v2/pokemon?limit=10`. 10 Pokemon should be enough to get started on your adventure. First objective – get the data from this URL ande `console.log` it.

## Quest 2 - List your pokemon

Now that you have pokemon data, you should make a list of their names and images.

There are no images in the response you got? Well, each pokemon object should have an url which will give you more data. Pokemon image is in `sprites.front_default`.

The html/styles are already prepared for you in `PokemonList.vue` component, just connect the data.

## Quest 3 - Choose your favorite pokemon

I know that you have a favorite pokemon. Your pokedex should have the ability to mark your favorite pokemon with a star. Star svg is commented out in `pokemonList.vue`. Star should be filled when pokemon is favorited.

## Quest 4 - Get to know your pokemon

Hey, a pokemon is more than just an image and a name! They also have _stats_!

Each pokemon card should link to its own page.

Display pokemon types ordered by `type.slot` property. Additionally, display pokemon stats in a table.

### Question

Let's say you need the **favorite** button inside the pokemonInfo too. How would you structure the app to solve this problem?

## Quest 5 - Searching for the special one

Once you have more pokemon it will be difficult to find the ones you need. Implement a simple search in your pokedex.

## Quest 6 (optional)

Make a toggle button to show only your favorite pokemon. Make sure this works well with search.

## Quest 7 (optional) - You gotta ca(t)che them all!

You have traveled far and wide and caught ALL of the pokemon.

Modify your request URL and make your pokedex show all of the pokemon. This may cause some performace problems, feel free to fix that.

## Quest 8 (optional) - Show your creativity

This pokedex is now yours - extend its functionality, modify the styles, _personalize_ it as much as you want and get some bonus points for that.

## Quest 9 (optional) - Show it to the world

Deploy this project, make sure it is secured with SSL, set up CI/CD show off your inner DevOps.

## [Congratulations](https://www.youtube.com/watch?v=oyFQVZ2h0V8)
