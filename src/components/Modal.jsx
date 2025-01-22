import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-slate-200 p-4 rounded shadow-lg w-11/12 max-w-md">
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
