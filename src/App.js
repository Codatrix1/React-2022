import React, { useState } from "react";

// components
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

// import data
import FeedbackData from "./data/FeedbackData";

// Main React Component
const App = function () {
  // Global/App Level state
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
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </React.Fragment>
  );
};

export default App;
