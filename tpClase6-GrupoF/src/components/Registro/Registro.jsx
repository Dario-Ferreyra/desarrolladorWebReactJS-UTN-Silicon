import React, {useState} from 'react'
import './Registro.css'

export default function Registro() {

    const [values, setValues] = useState ({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        password: ""
    });


    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Registro realizado con éxito! \n\nBienvenido " + values.nombre + " " + values.apellido);
    };

    return (
        <form className="formulario" id="formulario" onSubmit={handleSubmit}>
            <h2>Registro</h2>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required="" value={values.nombre} onChange={handleChange} />
            <br />
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required="" value={values.apellido} onChange={handleChange} />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required="" value={values.email} onChange={handleChange} />
            <br />
            <label htmlFor="telefono">Teléfono:</label>
            <input type="number" id="telefono" name="telefono" required="" value={values.telefono} onChange={handleChange} />
            <br />
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required="" value={values.password} onChange={handleChange} />
            <br />
            <label htmlFor="confirmPassword">Confirmar contraseña:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required=""/>
            <br />
            <button className="boton" id="btnEnviar" type="submit">
                Enviar
            </button>
        </form>

    )
}
