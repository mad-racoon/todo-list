import { useState } from "react";

import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [addTask, setAddTask] = useState(false);

  function handleClick() {
    setAddTask((prevState) => !prevState);
  }

  return (
    <>
      <Header />
      <main>
        <Button onClick={handleClick}>
          {addTask ? "Cancel" : "Add New Task"}
        </Button>
        {addTask && <Form />}
      </main>
    </>
  );
}

export default App;
