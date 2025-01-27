import { useParams } from "react-router-dom";
import { TodoForm } from "../components";
import { useTodoContext } from "../customHooks/useTodoContext";

function Edit() {
  const { id } = useParams();
  const { filteredTodos } = useTodoContext();
  // console.log(todos);
  const todo = filteredTodos.find((todo) => todo.id == id);
  return (
    <div className="bg-slate-200 min-h-screen py-8 flex flex-col items-center gap-4">
      <TodoForm formTitle="Edit your TODO" formSubmitText="Edit" todo={todo} />
    </div>
  );
}

export default Edit;
