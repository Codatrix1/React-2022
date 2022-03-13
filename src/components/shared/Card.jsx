import React from "react";
import PropTypes from "prop-types";

// React component
const Card = ({ children, reverse }) => {
  // Conditional class: coming from CSS
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  // const conditionalStyles = {
  //   backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
  //   color: reverse ? "#fff" : "#333",
  // };

  // // Conditional style based on class
  // return (
  //   <div className="card" style={conditionalStyles}>
  //     {children}
  //   </div>
  // );
};

// prop types
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

// default props
Card.defaultProps = {
  reverse: false,
};

export default Card;
