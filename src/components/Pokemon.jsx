// Destructure pokemon props here :)
export const Pokemon = () => {
  return <div>Pokemon</div>;
};



const Pokemon = ({ name, types }) => {
  return (
    <div className="pokemon">
      <h2>{name}</h2>
      <p>Types: {types.join(', ')}</p>
    </div>
  );
};


