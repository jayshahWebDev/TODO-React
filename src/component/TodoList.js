import { useContext } from "react";
import { todoContext } from "../context";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList = () => {
  const { todo, setTodo, setTaskDetail, setEditTodoId } =
    useContext(todoContext);

  const deleteTodo = (id) => {
    const deleteTodo = todo.filter((todo) => {
      return todo.id !== id;
    });
    setTodo(deleteTodo);
    toast.success("Todo Deleted SuccessFully", {
      autoClose: 3000,
      transition: Slide,
      theme: "colored",
      style: { fontWeight: "bold" },
    });
  };

  const editTodo = (taskData) => {
    setTaskDetail(taskData.taskDetail);
    setEditTodoId(taskData.id);
  };

  return (
    <div className="flex flex-col mt-[20px] mb-[20px]">
      {todo.map((task, index) => {
        return (
          <div
            className="flex justify-between mt-[20px] w-[500px] items-center border border-1 rounded-[10px] shadow-lg py-[6px] px-[8px]"
            key={task.id}
          >
            <p>{task.taskDetail}</p>
            <div className="flex gap-x-[15px]">
              <button
                className="bg-sky-500 px-[15px] py-[8px] rounded-[10px] text-white font-medium hover:bg-sky-700"
                onClick={() => {
                  editTodo(task);
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 px-[15px] py-[8px] rounded-[10px] text-white font-medium hover:bg-red-700"
                onClick={() => {
                  deleteTodo(task.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default TodoList;
