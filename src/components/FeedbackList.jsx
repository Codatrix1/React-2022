import React from "react";
import PropTypes from "prop-types";

// import components
import FeedbackItem from "./FeedbackItem";

// React component
const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return "No Feedback Yet";
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
};

// prop types
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
