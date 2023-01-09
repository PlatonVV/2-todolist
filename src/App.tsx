import React from "react";
import "./App.css";
import { Todolist } from "./Todolist";

function App() {
  let tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest API", isDone: false },
    { id: 5, title: "GraphQL", isDone: false },
  ];

  const removeTasks = (id: number) => {
    tasks1 = tasks1.filter((t) => t.id !== id);
    console.log(tasks1);
  };

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks1} />
    </div>
  );
}

export default App;
