import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem.jsx';

export default function TaskList({ tasks, updateTask, handleDelete }) {

  /* const task1 = {
    id: 1,
    titulo: 'Tarea 1',
    descripcion: 'Descripción de la Tarea 1',
  };

  const task2 = {
    id: 2,
    titulo: 'Tarea 2',
    descripcion: 'Descripción de la Tarea 2',
  };

  const initialTasks = [task1, task2]; */

  /* const [lista, setTasks] = useState(initialTasks); */

  /* const updateTask = (taskId, newData) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, ...newData } : task)));
  }; */

  /* const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }; */

  /*const [nuevoTaskItem, setNuevoTaskItem] = useState({
    id: Date.now(),
    titulo: '',
    descripcion: '',
  });

  const agregarTaskItem = () => {
    // Crea una copia actualizada del array de tareas con el nuevo TaskItem
    const nuevasTareas = [...tasks, nuevoTaskItem];
  
    // Actualiza el estado de las tareas con la nueva lista
    setTasks(nuevasTareas);
  
    // Reinicia el estado del nuevo TaskItem para futuros usos
    setNuevoTaskItem({
      id: Date.now(),
      titulo: '',
      descripcion: '',
    });
  }; */


  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="col-md-12 mb-4">
          <TaskItem
            task={task}
            updateTask={updateTask}
            handleDelete={handleDelete}
          />
        </div>
      ))}
    </>
  );
}
