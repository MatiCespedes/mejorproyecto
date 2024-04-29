import React from 'react';
import AlumnosLayout from '../layout/AlumnosLayout';
import '../styles/ProjectRegistration.css';

const InscripcionProyectoForm: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Lógica para enviar el formulario
    };

    return (
        <AlumnosLayout> 
            <body>
            <div className="container_inscription_internship">
                <h1 className="title">Inscripción de la pasantía</h1>
                <form action="submit_form.php" method="POST" className="registration-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name_empresa" className="label">Empresa:</label>
                        <input type="text" id="name_empresa" name="name_empresa" className="input" required placeholder="Nombre de la empresa" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="proyecto" className="label">Proyecto:</label>
                        <input type="text" id="job" name="job" className="input" required placeholder="Proyecto..." /> 
                    </div>

                    <div className="input-group">
                        <label htmlFor="propblem" className="label">Problema a resolver:</label>
                        <input type="text" id="name_supervisor1" name="name_supervisor1" className="input" required placeholder="problema..." />
                    </div>

                    <div className="input-group">
                        <label htmlFor="solution" className="label">Solucion problema:</label>
                        <input type="text" id="email1" name="email1" className="input" required placeholder="Solución..." />
                        
                    </div>
                    <div className="input-group">
                        <label htmlFor="justsolution" className="label">Justificación del problema:</label>
                        <input type="text" id="email1" name="email1" className="inputjust" required placeholder="Justificación..." />
                        
                    </div>
                    <input type="submit" value="Enviar" className="btn" />
                </form>
            </div>
            </body>
        </AlumnosLayout>
    );
}

export default InscripcionProyectoForm;
