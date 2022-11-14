import { useContext } from "react";
import { todoContext } from "../context";
import { v4 } from "uuid";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoForm = () => {
  const {
    todo,
    setTodo,
    taskDetail,
    setTaskDetail,
    editTodoId,
    setEditTodoId,
  } = useContext(todoContext);

  function addTodo() {
    if (editTodoId) {
      console.log("inside edittodoID");

      todo.map((task) => {
        return task.id === editTodoId ? (task.taskDetail = taskDetail) : "";
      });
      setTodo(todo);
      setTaskDetail("");
      setEditTodoId("");

      return toast.success("Todo Updated SuccessFully", {
        autoClose: 3000,
        theme: "colored",
        transition: Slide,
        style: { fontWeight: "bold" },
      });
    }
    if (taskDetail === "") {
      return toast.warn("Please Enter Todo", {
        autoClose: 3000,
        theme: "colored",
        transition: Slide,
        style: { fontWeight: "bold" },
      });
    }
    setTodo([...todo, { id: v4(), taskDetail }]);
    toast.success("Todo Added SuccessFully", {
      autoClose: 3000,
      theme: "colored",
      transition: Slide,
      style: { fontWeight: "bold" },
    });
    setTaskDetail("");
  }
  return (
    <div className="flex gap-x-[20px]">
      <input
        className="border border-slate-300 rounded-md w-[300px] px-[8px] py-[8px] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
        type="text"
        placeholder="Enter Todo Here..."
        value={taskDetail}
        onChange={(e) => {
          setTaskDetail(e.target.value);
        }}
      />
      <button
        className="bg-sky-500 px-[15px] py-[8px] rounded-[10px] text-white font-medium hover:bg-sky-700"
        onClick={addTodo}
      >
        {editTodoId ? "Update" : "Add"}
      </button>
      <ToastContainer />
    </div>
  );
};

export default TodoForm;
