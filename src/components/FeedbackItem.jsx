import React from "react";
import PropTypes from "prop-types";

// import components
import Card from "./shared/Card";

// React Component
const FeedbackItem = ({ item }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

// prop types
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
