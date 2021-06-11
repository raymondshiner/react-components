import React from "react";

const Button = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;

Button.propTypes = {
  /**
   * The Text to render on the button
   */
  text: "String",
};

Button.defaultProps = {
  text: "I'm a Button",
};
