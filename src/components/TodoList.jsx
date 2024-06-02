import React, { useState } from "react";
import { FiArchive, FiMoreVertical } from "react-icons/fi";
import {
  AiOutlineArrowLeft,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Hello", description: "No questions added" },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoId, setCurrentTodoId] = useState(null);

  const addOrUpdateTodo = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    if (isEditing) {
      setTodos(
        todos.map((todo) =>
          todo.id === currentTodoId ? { ...todo, title, description } : todo
        )
      );
      setIsEditing(false);
      setCurrentTodoId(null);
    } else {
      setTodos([...todos, { id: Date.now(), title, description }]);
    }

    setTitle("");
    setDescription("");
  };

  const editTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodoId(todo.id);
    setTitle(todo.title);
    setDescription(todo.description);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 w-[100vw]">
      <div className="flex justify-between items-center py-4 px-6 bg-white shadow-md mb-6">
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <AiOutlineArrowLeft
            className="w-6 h-6 text-gray-600"
            onClick={handleClick}
          />
        </button>
        <h1 className="text-2xl font-semibold">Notebooks</h1>
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FiArchive className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div className="w-full max-w-md mx-auto">
        <div className="mb-6">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-4"
            >
              <div className="flex items-center">
                <div className="mr-4">
                  <span className="material-icons text-orange-500">notes</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{todo.title}</h2>
                  <p className="text-gray-600">{todo.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => editTodo(todo)}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <AiOutlineEdit className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <AiOutlineDelete className="w-6 h-6 text-gray-600" />
                </button>
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  <FiMoreVertical className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={addOrUpdateTodo} className="flex flex-col space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="p-2 bg-white rounded-lg shadow-md text-black"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="p-2 bg-white rounded-lg shadow-md text-black"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          >
            {isEditing ? "Update NoteBook" : "Add NoteBook"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
