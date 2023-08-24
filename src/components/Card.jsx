import React, { useState } from "react";
import { RoughNotation } from "react-rough-notation";

export default function Card({ title, initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [showSave, setShowSave] = useState(true);

  const addTask = () => {
    const newTask = {
      taskTitle: "New task",
      isFinished: false,
    };

    const newArray = [...tasks, newTask];
    setTasks(newArray);
  };

  const removeTask = (indexToRemove) => {
    const newArray = tasks.filter((_, index) => index != indexToRemove);
    setTasks(newArray);
  };

  const editTask = (indexToUpdate) => {
    const newArray = tasks.map((task, index) => {
      if (index === indexToUpdate) {
        task.taskTitle = "New task edited";
      }

      return task;
    });

    setTasks(newArray);
  };

  const handleClickOnTask = (indexToUpdate) => {
    const newArray = tasks.map((task, index) => {
      if (index === indexToUpdate) {
        task.isFinished = !task.isFinished;
      }

      return task;
    });

    setTasks(newArray);
  };

  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      {tasks.map((task, index) => {
        return (
          <div className="cardRow" key={index}>
            <RoughNotation
              type="strike-through"
              show={task.isFinished}
              onClick={() => handleClickOnTask(index)}
            >
              {task.taskTitle}
            </RoughNotation>
            <div style={{ display: "flex", gap: "5px" }}>
              <button onClick={() => removeTask(index)}>X</button>
              <button onClick={() => editTask(index)}>E</button>
            </div>
          </div>
        );
      })}
      <div className="cardButtons">
        <button onClick={addTask}>Add Task</button>
        <button
          className={showSave ? "" : "notShow"}
          // onClick={handleClickDelete}
        >
          Save
        </button>
      </div>
    </div>
  );
}
