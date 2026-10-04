import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Assignment",
      category: "University",
    },
    {
      id: 2,
      title: "Study React",
      category: "Study",
    },
    {
      id: 3,
      title: "Attend Class",
      category: "Class",
    },
  ]);

  // Task #4: useEffect
  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  // Add a new task
  function addTask() {
    console.log("Add Task button clicked");

    const newTask = {
      id: tasks.length + 1,
      title: "New University Task",
      category: "General",
    };

    setTasks([...tasks, newTask]);

    console.log("New task added");
  }

  return (
    <div>
      <h1>University Task Board</h1>

      <h2>Total Tasks: {tasks.length}</h2>

      <button onClick={addTask}>
        Add Task
      </button>

      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>Category: {task.category}</p>
        </div>
      ))}
    </div>
  );
}

export default App;