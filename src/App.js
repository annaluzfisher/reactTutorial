import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  // tasks below, the array, is immutable . you cannot push to it. you re-create it and send it off again
  // usually would have a store (?) or api that youre fetching data from
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "dentist",
      day: "Feb 5th at 12:30 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "party",
      day: "Feb 10th at 10:00 am",
      reminder: true,
    },
    {
      id: 3,
      text: "shopping",
      day: "Feb 5th at 2:20 pm",
      reminder: false,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) =>{
    setTasks(tasks.map((task)=> (
      task.id === id ? {...task, reminder: !task.reminder} : task
    )))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        "You have no tasks"
      )}
    </div>
  );
}

export default App;
