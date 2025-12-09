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

import { Pokemon } from "./components/Pokemon"
import data from "./data.json"

export const App = () => {
  const { pokemons } = data
  const renderPokemons = pokemons.map(({id, name, category, height, types}) => (
   <Pokemon
      name={name}
      category={category}
      height={height}
      types={types}
      key={id}
      />
    )
  )

  return (
    <div className="App">
      <p>Catch them all</p>
      <section className="pokemonList">{renderPokemons}
      </section>
    </div>
  );
};

export default App