/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */


import React from 'react';
import data from './data.json'; // Ensure the path is correct

//Pokemon component to display the name of each Pokémon
const Pokemon = ({ name, height, id }) => {
  return (
    <div className="pokemon">
      <h2>{name}</h2>
      <p><strong>Height:</strong> {height}</p>
      <p><strong>Id:</strong> {id}</p>
    </div>
  );
};

// Header component
const Header = () => <h1>Pokémon List</h1>;

// Footer component
const Footer = () => <footer>© 2024 Pokémon Inc.</footer>;

// Main App component
export const App = () => {
  return (
    <div className="App">
      <Header />
      {data.pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          height={pokemon.height}
          id={pokemon.id}
        />
      ))}
      <Footer />
    </div>
  );
};

