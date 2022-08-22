import React from 'react'
import { FaTimes } from "react-icons/fa";

function Task({task,onDelete,onToggle}) { ///if you have redux you can access your state from within components.
  return (
    <div className={`task ${task.reminder? 'reminder' :'' }`} onClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task
//STATE GETS PASSED DOWN. ACTIONS GET PASSED UP