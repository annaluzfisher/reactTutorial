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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
