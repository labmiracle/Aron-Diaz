import "./App.css";
import Form from "./components/Form"; 
import { useState } from "react";
import Task from "./components/Task";

function App() {
const [task, setTask] = useState("");

const [listTask, setListTask] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (task === "") {
      alert("Please add a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      task: task,
      completed: false,

  }

  const temp = [newTask, ...listTask];
  setListTask(temp);

  setTask("");
  console.log(listTask);
}

  function handleChange(e) {
    setTask(e.target.value);
    console.log(task);
  }

  return (
    <>
      <div className="container">
        <h1>TO DO LIST</h1>

        <div className="formcontainer">
          <Form task={task} handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
        <div className="taskcontainer">
          <h2>List</h2>
          <div className="infocontainer">

            {
            listTask.map(task => (
              <Task 
              key={task.id}
              id={task.id}
              task={task}
              
              />
            ) )
            
            }
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
