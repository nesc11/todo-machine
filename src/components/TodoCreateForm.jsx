import { useTodoContext } from "../customHooks/useTodoContext";

function TodoCreateForm({ toggleModal }) {
  const { handleAdd } = useTodoContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    let { todo } = Object.fromEntries(new FormData(form));
    todo = todo?.trim();
    if (!todo) return;
    handleAdd(todo);
    toggleModal();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="todo" className="text-lg font-bold">
        Write your new TODO
      </label>
      <textarea
        className="border rounded px-2 py-1 w-full placeholder:italic outline-cyan-500"
        placeholder="Enter todo text..."
        name="todo"
        id="todo"
      ></textarea>
      <div className="flex gap-4 justify-center items-center">
        <button
          onClick={toggleModal}
          type="button"
          className="hover:bg-slate-300 px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoCreateForm;
