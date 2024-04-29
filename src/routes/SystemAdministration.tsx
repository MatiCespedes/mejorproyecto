import React from 'react';
import AdminLayout from "../layout/AdminLayout";
import '../styles/SystemAdministration.css';

const AdministracionSistema: React.FC = () => {
    return (
        <AdminLayout>
            <body>
            <div className="container">
                <h2>Administración del sistema</h2>

                <div className="container">
                    <div className="columns-wrapper">
                        <div className="column">
                            <a href="#" className="link">Requisitos</a>
                        </div>
                        <div className="column">
                            <a href="#" className="link">Validación</a>
                        </div>
                    </div>

                    <div className="horizontal-column">
                        <div className="column">
                            <a href="#" className="link">Gestionar usuarios</a>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </AdminLayout>
    );
}

export default AdministracionSistema;

