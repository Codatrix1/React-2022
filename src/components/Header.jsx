import React from "react";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <div className="container">
      <h2>{text}</h2>
    </div>
  );
};

// Using default props
Header.defaultProps = {
  text: "Feedback UI",
};

// Using prop-types
Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
