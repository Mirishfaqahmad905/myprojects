
import React, { useState } from 'react';
import './TodDo.css';
const ToDoList = () => {
  const [tasks, setTasks] = useState([
    // { id: 1, text: 'Do the dishes' },
    // { id: 2, text: 'Take out the trash' },
    // { id: 3, text: 'Mow the lawn' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      text: e.target.task.value,
    };
    setTasks([...tasks, newTask]);
    e.target.reset();
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="Enter a new task" />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}{''}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
