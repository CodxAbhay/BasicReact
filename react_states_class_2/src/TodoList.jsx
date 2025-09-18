import { useState } from "react";

export default function Todolist() {
  let [todos, setTodos] = useState([{ text: "sample", completed: false }]);
  let [newtodo, setNewtodo] = useState("");

  // Function to add a new task
  let addnewTask = () => {
    if (newtodo.trim() === "") return; // Prevent adding empty tasks
    setTodos([...todos, { text: newtodo, completed: false }]); // Add new task as an object
    setNewtodo(""); // Clear input field
  };

  // Function to update the input value
  let updateTodovalue = (event) => {
    setNewtodo(event.target.value);
  };

  // Function to delete a task
  let deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Function to mark a task as completed
  let doneTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={newtodo}
        onChange={updateTodovalue}
      />
      <button onClick={addnewTask}>Add</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>List To Do</h4>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "black",
            }}
          >
            <span>{todo.text.toUpperCase()}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => doneTodo(index)}>
              {todo.completed ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
