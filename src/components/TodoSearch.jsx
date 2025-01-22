import { useTodoContext } from "../customHooks/useTodoContext";

function TodoSearch() {
  const { searchText, handleInput } = useTodoContext();
  return (
    <div className="shadow">
      <input
        value={searchText}
        onInput={handleInput}
        className="border border-slate-300 px-4 py-2 rounded-md"
        name="searchText"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default TodoSearch;
