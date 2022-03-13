import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

// import components
import Card from "./shared/Card";

// React Component
const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="dark" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

// prop types
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
