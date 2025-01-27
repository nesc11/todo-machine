import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function TodoItem({ todo, handleDelete, handleComplete }) {
  const navigate = useNavigate();
  return (
    <li className="flex gap-4 items-center border px-2 py-4 bg-slate-100 relative">
      <button
        onClick={handleComplete}
        className={`font-bold text-2xl ${
          todo.completed ? "text-green-600" : "text-gray-600"
        }`}
      >
        <FaCheck />
      </button>
      <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
      <button
        onClick={() => navigate(`/edit/${todo.id}`)}
        className="absolute -top-2 right-10 font-bold text-2xl hover:text-cyan-600"
      >
        <FaEdit />
      </button>
      <button
        onClick={handleDelete}
        className="absolute -top-2 right-2 font-bold text-2xl hover:text-red-600"
      >
        <FaTimes />
      </button>
    </li>
  );
}

export default TodoItem;
