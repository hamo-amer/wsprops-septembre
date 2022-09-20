import React from "react";
import PropTypes from "prop-types";

function Child({ name, age, user, names, handleAlert, isAdult, children }) {
  return (
    <div>
      <h3>{name}</h3>
      {isAdult && <p>{age}</p>}
      <br />
      {names.map((name, i) => (
        <h4 key={i}>{name}</h4>
      ))}
      <br />
      <button onClick={() => handleAlert(user.name)}>Click me</button>
      <br />
      {children}
    </div>
  );
}
Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  user: PropTypes.object,
  names: PropTypes.arrayOf(PropTypes.string),
  handleAlert: PropTypes.func,
};
Child.defaultProps = {
  age: 20,
};

export default Child;
