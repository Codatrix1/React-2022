import React from "react";
import PropTypes from "prop-types";

// React component
const FeedbackStats = ({ feedback }) => {
  // Calculate ratings average
  let average =
    feedback.reduce((accum, current) => {
      return accum + current.rating;
    }, 0) / feedback.length;

  // fixing the result with one decimal point only: Also skip displaying 0 if there
  // average = average.toFixed(1).replace(/[.,]0$/, "");
  average = average.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

// prop types
FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
