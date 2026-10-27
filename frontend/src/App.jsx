import tasks from "./tasks.json";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Student Assistant</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
