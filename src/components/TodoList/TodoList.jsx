import {React, useState} from 'react'
import TodoItem from '../TodoItem/TodoItem';
import "./TodoList.css";
const TodoList = () => {
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
            };
            setTasks([...tasks, newTask]);
            setText('');
        }

       function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
        }

       function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
            return {...task, completed: !task.completed};
            } else {
            return task;
            } 
        }));
        }

  return (
    <div className="todo-list">
        {tasks.length > 0 ? "" : <h3>List is empty</h3>}
        {tasks.map(task => (
            <TodoItem
                key={task.id} 
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted} 
            />
        ))}
        <div className='input-wrapper'>   
            <div class="input-group input-group mb-3">
                <input type="text" class="form-control" value={text} onChange={e => setText(e.target.value)} aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
            </div>
            <button type="button" class="btn btn-primary" onClick={() => addTask(text)}>Add</button>
        </div>
    </div>
    );
  
}

export default TodoList