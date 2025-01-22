import { useState } from "react";
import Modal from "./Modal";
import TodoCreateForm from "./TodoCreateForm";
import { FaPlusCircle } from "react-icons/fa";

function TodoCreate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prevState) => !prevState);
  return (
    <>
      <button
        className="text-cyan-500 text-5xl hover:text-cyan-600"
        onClick={toggleModal}
      >
        <FaPlusCircle />
      </button>
      {isModalOpen && (
        <Modal>
          <TodoCreateForm toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
}

export default TodoCreate;
