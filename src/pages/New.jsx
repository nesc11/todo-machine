import { TodoForm } from "../components";

function New() {
  return (
    <div className="bg-slate-200 min-h-screen py-8 flex flex-col items-center gap-4">
      <TodoForm formTitle="Write your new TODO" formSubmitText="Add" />
    </div>
  );
}

export default New;
