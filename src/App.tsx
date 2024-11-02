import "./App.css";
import { Header } from "./components/Header";
import { TaskAdder } from "./components/TaskAdder";
import { TaskContainer } from "./components/TaskContainer";

function App() {
  return (
    <>
      <Header />
      <TaskAdder />
      <TaskContainer />
    </>
  );
}

export default App;
