import { useEffect, useState } from "react";
import tasks from "./tasks.json";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import StorageStatus from "./components/StorageStatus";
import { ensureTasksFile } from "./storage/ensureTasksFile";
import "./App.css";

function App() {
  const [storage, setStorage] = useState(null);
  const [storageError, setStorageError] = useState("");

  useEffect(() => {
    async function init() {
      try {
        setStorage(await ensureTasksFile());
      } catch (err) {
        setStorageError(err.message);
      }
    }
    init();
  }, []);

  return (
    <div className="app-container">
      <Header taskCount={tasks.length} />
      <StorageStatus info={storage} error={storageError} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
