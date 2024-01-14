import React from 'react'
import './TodoItem.css';

const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
        function handleChange() {
         toggleCompleted(task.id);
         }   

  return (
    <div className="todo-item">
        <input 
            type="checkbox"
            id='checkbox'
            checked={task.completed}
            onChange={handleChange}
        />
        {task.completed ? <p id='completed'>{task.text}</p> : <p id='not-completed'>{task.text}</p>}
        <button type="button" class="btn btn-danger delete-btn" onClick={() => deleteTask(task.id)}>X</button>
    </div>
  )
}

export default TodoItem;