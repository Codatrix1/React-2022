import React from "react";
import PropTypes from "prop-types";

// React component
const Button = ({ version, type, isDisabled, children }) => {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};

// prop types
Button.propTypes = {
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

// default props
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

export default Button;
