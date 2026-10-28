import tasks from "./tasks.json";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header taskCount={tasks.length} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
