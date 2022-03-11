import React from "react";

// Global state
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";

// components
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

const App = function () {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </React.Fragment>
  );
};

export default App;
