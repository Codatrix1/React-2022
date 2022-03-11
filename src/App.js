import React from "react";

// components
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

const App = function () {
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
