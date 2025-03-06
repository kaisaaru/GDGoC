import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TodoList } from "./pages/TodoList";
import { AddTodoList } from "./pages/AddList";
import { EditTodoList } from "./pages/EditList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodoList />} />
        <Route path="/edit/:id" element={<EditTodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
