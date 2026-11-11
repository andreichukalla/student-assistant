import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import { loadTasks, saveTasks } from "./storage/tasksFile";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks().then(setTasks);
  }, []);

  function handleToggle(id) {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updated);
    saveTasks(updated);
  }

  return (
    <div className="app-container">
      <Header taskCount={tasks.length} />
      <TaskList tasks={tasks} onToggle={handleToggle} />
    </div>
  );
}

export default App;
