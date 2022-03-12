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

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </React.Fragment>
  );
};

export default App;
