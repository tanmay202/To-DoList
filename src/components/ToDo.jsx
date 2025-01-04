import "./ToDo.css";
import { ToDoLogic } from "./ToDoLogic";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import { IoArrowUndo } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";


const ToDo = () => {
  const {
    tasks,
    newTask,
    showCompleted,
    editingId,
    editText,
    setNewTask,
    setShowCompleted,
    addTask,
    toggleTaskCompletion,
    deleteTask,
    startEditing,
    saveEdit,
    cancelEdit,
    setEditText, // Ensure this is destructured
  } = ToDoLogic();

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          className="todo-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task..."
        />
        <button className="add-task-button" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.target.checked)}
          />
          Show Completed Tasks
        </label>
      </div>
      <ul className="todo-list">
        {tasks
          .filter((task) => (showCompleted ? task.completed : !task.completed))
          .map((task) => (
            <li key={task.id} className={task.completed ? "completed" : ""}>
              {editingId === task.id ? (
                <div className="edit-group">
                  <textarea style={{resize:'none'}}
                    type="text"
                    className="edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)} // Properly update editText
                  />
                  <button style={{margin:'8px'}} onClick={() => saveEdit(task.id)}><FaSave/> </button>
                  <button onClick={cancelEdit}><MdCancel /> </button>
                </div>
              ) : (
                <>
                  <span className="todo-text">{task.text}</span>
                  <div className="todo-actions">
                    <button onClick={() => toggleTaskCompletion(task.id)}>
                      {task.completed ? <IoArrowUndo /> : <FaCheckCircle />}
                    </button>
                    <button onClick={() => startEditing(task.id, task.text)}>
                      <FaEdit />
                    </button>
                    <button onClick={() => deleteTask(task.id)}>
                      <MdOutlineDelete />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
          </ul>
          
      </div>
      
     
  );
};

export default ToDo;
