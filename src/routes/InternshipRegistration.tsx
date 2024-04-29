import React from 'react';
import '../styles/Internship_registration.css';
import AlumnosLayout from '../layout/AlumnosLayout';

const InternshipRegistrationForm: React.FC = () => {
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
                        <label htmlFor="puesto_trabajo" className="label">Puesto de trabajo:</label>
                        <input type="text" id="job" name="job" className="input" required placeholder="Puesto de trabajo..." /> 
                    </div>

                    <div className="input-group">
                        <label htmlFor="name_supervisor1" className="label">Nombre del supervisor:</label>
                        <input type="text" id="name_supervisor1" name="name_supervisor1" className="input" required placeholder="Nombre..." />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email1" className="label">Email del supervisor:</label>
                        <input type="text" id="email1" name="email1" className="input" required placeholder="Correo..." />
                    </div>

                    <div className="input-group">
                        <label htmlFor="name_supervisor2" className="label">Nombre del supervisor:</label>
                        <input type="text" id="name_supervisor2" name="name_supervisor2" className="input" required placeholder="Nombre..." />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email2" className="label">Email del segundo supervisor:</label>
                        <input type="text" id="email2" name="email2" className="input" required placeholder="Correo" />
                    </div>

                    <input type="submit" value="Enviar" className="btn" />
                </form>
            </div>
            </body>
        </AlumnosLayout>
    );
}

export default InternshipRegistrationForm;

