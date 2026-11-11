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

  // Обчислюємо кількість виконаних та загальну кількість завдань
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="app-container">
      <Header taskCount={totalTasks} />

      {/* Індивідуальне завдання: вивід лічильника */}
      <p className="completed-counter">
        Виконано: {completedTasks} з {totalTasks}
      </p>

      <TaskList tasks={tasks} onToggle={handleToggle} />
    </div>
  );
}

export default App;
