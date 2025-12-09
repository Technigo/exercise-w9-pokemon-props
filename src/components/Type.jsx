// Destructure pokemon types props here :)
import PropTypes from "prop-types"

export const Type = ({ types }) => {
  return (
    <div>
      <span>Types:</span>
    {types.map((type, key) => (
       <ul key={key}>
        {" "}
         <li key={key}>{type}</li>
      </ul>
        ))}
    </div>
  )
}


Type.propTypes = {
  types: PropTypes.array.isRequired,
}

Type.defaultProps = {
  components: "Components are missing",
}