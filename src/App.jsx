import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import db from "./db";

function App() {
  const [lists, setLists] = useState(db);

  const handleNewList = () => {
    const newList = {
      title: "Titulo Nuevo",
      tasks: [],
    };

    const newArray = [...lists, newList];
    setLists(newArray);
  };

  const handleDelete = (indexToRemove) => {
    const newArray = lists.filter((list, index) => index != indexToRemove);
    setLists(newArray);
  };

  return (
    <div className="App">
      {lists.map((list, index) => {
        return (
          <div className="cardContainer" key={index}>
            <Card title={list.title} initialTasks={list.tasks} />
            <button onClick={() => handleDelete(index)}>Delete List</button>
          </div>
        );
      })}
      <button onClick={handleNewList}>New List</button>
    </div>
  );
}

export default App;
