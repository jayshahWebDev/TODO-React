import { useState } from "react";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import { todoContext } from "./context";

function App() {
  const [todo, setTodo] = useState([]);
  const [taskDetail, setTaskDetail] = useState("");
  const [editTodoId, setEditTodoId] = useState("");

  return (
    <todoContext.Provider
      value={{
        todo,
        setTodo,
        taskDetail,
        setTaskDetail,
        editTodoId,
        setEditTodoId,
      }}
    >
      <div className="App flex flex-col justify-center items-center mt-[5%]">
        <TodoForm />
        <TodoList />
      </div>
    </todoContext.Provider>
  );
}

export default App;
