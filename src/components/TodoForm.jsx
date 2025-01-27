import { useNavigate, useLocation } from "react-router-dom";
import { useTodoContext } from "../customHooks/useTodoContext";

function TodoForm({ formTitle, formSubmitText, todo = null }) {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { handleAdd, handleEdit } = useTodoContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    let { todoText } = Object.fromEntries(new FormData(form));
    todoText = todoText?.trim();
    if (!todoText) return;
    if (location.pathname.includes("edit")) {
      handleEdit(todo.id, todoText);
    } else if (location.pathname.includes("new")) {
      handleAdd(todoText);
    }
    form.reset();
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="todoText" className="text-lg font-bold">
        {formTitle}
      </label>
      <textarea
        className="border rounded px-2 py-1 w-full placeholder:italic outline-cyan-500"
        placeholder="Enter todo text..."
        name="todoText"
        id="todoText"
        defaultValue={todo?.text || ""}
      ></textarea>
      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="hover:bg-slate-300 px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded"
        >
          {formSubmitText}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
