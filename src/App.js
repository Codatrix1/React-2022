import React from "react";

const App = function () {
  const title = "Hello from the App Component";
  const body =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sint facilis? Id ut est a consequuntur, nostrum fugiat. Molestias, ex!";

  const comments = [
    { id: 1, text: "Comment One" },
    { id: 2, text: "Comment Two" },
    { id: 3, text: "Comment Three" },
  ];

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
