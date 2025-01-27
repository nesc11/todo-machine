import { TodoCounter, TodoSearch, TodoList, TodoCreate } from "../components";

function Home() {
  return (
    <div className="bg-slate-200 min-h-screen py-8 flex flex-col items-center gap-4">
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      <TodoCreate />
    </div>
  );
}

export default Home;
