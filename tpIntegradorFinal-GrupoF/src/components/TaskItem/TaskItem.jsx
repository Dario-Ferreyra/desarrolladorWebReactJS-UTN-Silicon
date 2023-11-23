import React, { useState, useEffect } from 'react'
import './TaskItem.css'

export default function TaskItem({ task, updateTask, deleteTask }) {

    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        password: ""
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Registro realizado con éxito! \n\nBienvenido " + values.nombre + " " + values.apellido);
    };


    /* const handleEditableChange = (event) => {
        const { name, value } = event.target;
        setEditableData({
            ...editableData,
            [name]: value,
        });
    }; */



    const [completada, setCompletada] = useState(false);
    const [editingMode, setEditingMode] = useState(false);
    const [editableData, setEditableData] = useState({
        titulo: editingMode ? task.titulo : '',
        descripcion: editingMode ? task.descripcion : '',
    });


    const handleEditableChange = (event) => {
        const { name, value } = event.target;
        setEditableData({
            ...editableData,
            [name]: value,
        });
    };

    const handleSave = () => {
        // Extraer los nuevos valores del estado editableData
        const { titulo, descripcion } = editableData;

        console.log('Nuevos valores:', titulo, descripcion);

        // Llamar a la función de actualización de la tarea desde las props
        updateTask(task.id, {
            titulo,
            descripcion,
          });
          

        // Actualizar el estado local después de llamar a updateTask
        setEditableData({
            titulo: task.titulo,
            descripcion: task.descripcion,
        });

        // Salir del modo de edición
        setEditingMode(false);
    };

    useEffect(() => {
        // Actualizar editableData cuando las props cambien
        setEditableData({
            titulo: task.titulo,
            descripcion: task.descripcion,
        });
    }, [task]);

    const handleDelete = () => {
        deleteTask(task.id);
    };



    return (
        <div className="card">
            <h5 className={`card-header ${completada ? 'completed-text' : ''}`}>
                {editingMode ? (
                    <input
                        type="text"
                        name="titulo"
                        value={editableData.titulo}
                        onChange={handleEditableChange}
                    />
                ) : (
                    task.titulo
                )}
            </h5>
            <div className="card-body">
                <p className={`card-text ${completada ? 'completed-text' : ''}`}>
                    {editingMode ? (
                        <textarea
                            name="descripcion"
                            value={editableData.descripcion}
                            onChange={handleEditableChange}
                        />
                    ) : (
                        task.descripcion
                    )}
                </p>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a onClick={() => setCompletada(!completada)} className="btn btn-primary">
                    {completada ? 'Habilitar' : 'Completar'}
                    </a>
                    <a onClick={() => {
                        if (editingMode) {
                            handleSave();
                        } else {
                            setEditingMode(!editingMode);
                            setEditableData({ titulo: task.titulo, descripcion: task.descripcion });
                        }
                    }} className="btn btn-secondary">
                        {editingMode ? 'Guardar' : 'Editar'}
                    </a>
                    <a onClick={handleDelete} className="btn btn-danger">
                        Eliminar
                    </a>
                </div>
            </div>
        </div>
    )
}
