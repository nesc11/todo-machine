import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoProvider } from "./components/TodoProvider";
import { Home, New, Edit, NotFound } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
