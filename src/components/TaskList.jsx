import { useState } from "react";

import Button from "./Button.jsx";
import Form from "./Form.jsx";

export default function TaskList() {
  const [addTask, setAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  function handleClick() {
    setAddTask((prevState) => !prevState);
  }

  return (
    <div>
      <div>
        <Button onClick={handleClick}>
          {addTask ? "Cancel" : "Add New Task"}
        </Button>
        {addTask && <Form />}
      </div>
    </div>
  );
}
