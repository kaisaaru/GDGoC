import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TodoList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setList(storedTasks);
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Ke halaman edit
  };

  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  };

  return (
    <div className="m-12">
      <div className="flex justify-between gap-3 px-2 py-3">
        <p className="font-bold lg:text-3xl">TodoList App</p>
        <button
          className="rounded-lg bg-green-500 px-8 py-2 font-medium text-white hover:bg-green-600"
          onClick={() => navigate("/add")}
        >
          Add
        </button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {list.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            heading={item.heading}
            description={item.description}
            createdAt={item.createdAt}
            onEdit={() => handleEdit(item.id)} 
            onDelete={() => handleDelete(item.id)} 
          />
        ))}
      </div>
    </div>
  );
};
