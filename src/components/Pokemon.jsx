// Destructure pokemon props here :)
// we have to pass the information into the property 
import PropTypes from "prop-types"
import { Type } from "./Type"
import "./Pokemon.css"

export const Pokemon = ({
  //we write what we want to diplay
name, category, height, types }) => {
  return (
    <div className="pokemon">
    <p>
      <span>Name: {name}</span>
    </p>
    <p>
      <span>Category: {category}</span>
    </p>
    <p>
      <span>Height: {height}</span>
    </p>
      <Type types={types} />
    </div>
  )
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  types: PropTypes.array.isRequired,
}
























