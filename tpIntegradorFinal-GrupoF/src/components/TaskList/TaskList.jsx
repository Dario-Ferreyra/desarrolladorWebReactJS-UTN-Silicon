import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem.jsx';

export default function TaskList() {
  const task1 = {
    id: 1,
    titulo: 'Tarea 1',
    descripcion: 'Descripción de la Tarea 1',
  };

  const task2 = {
    id: 2,
    titulo: 'Tarea 2',
    descripcion: 'Descripción de la Tarea 2',
  };

  const initialTasks = [task1, task2];

  const [tasks, setTasks] = useState(initialTasks);

  const updateTask = (taskId, newData) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, ...newData } : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="column container position-absolute top-50 start-50 translate-middle">
      {tasks.map((task) => (
        <div key={task.id} className="col-md-12 mb-4">
          <TaskItem
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        </div>
      ))}
    </div>
  );
}
