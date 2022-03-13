import React from "react";

// components
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

// Global state
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";

// Main React Component
const App = function () {
  const [feedback, setFeedback] = useState(FeedbackData);

  // delete a feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </React.Fragment>
  );
};

export default App;
