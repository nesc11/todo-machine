import { useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

function TodoCreate() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="text-cyan-500 text-5xl hover:text-cyan-600"
        onClick={() => navigate("/new")}
      >
        <FaPlusCircle />
      </button>
    </>
  );
}

export default TodoCreate;
