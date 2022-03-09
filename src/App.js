import React from "react";

// components
import Header from "./components/Header";

const App = function () {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <h1>My Application</h1>
      </div>
    </React.Fragment>
  );
};

export default App;
