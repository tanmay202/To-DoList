import { useState } from "react";

export const ToDoLogic = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Redesign the homepage", completed: false },
    { id: 2, text: "Plan team meeting", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text); // Initialize editText with the current task's text
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: editText } : task
        )
      );
      cancelEdit(); // Reset editing state after saving
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return {
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
    setEditText, // Ensure setEditText is exported
  };
};
