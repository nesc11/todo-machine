import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./components/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div className="bg-slate-200 min-h-screen py-8 flex flex-col items-center gap-4">
        <TodoCounter />
        <TodoSearch />
        <TodoList />
        <TodoCreate />
      </div>
    </TodoProvider>
  );
}

export default App;
