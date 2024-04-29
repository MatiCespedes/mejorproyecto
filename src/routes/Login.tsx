import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import AdminLayout from "../layout/AdminLayout";
import { useState } from 'react';
import '../styles/Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const auth = useAuth();

    
    

    if (auth.isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <AdminLayout>
            <div className="container_login">
                <h2 className="title_login">Ingresar en Pasantías UAI</h2>
                <form className="login-form">
                    <div className="input-group">
                        <label htmlFor="username" className="label">Correo:</label>
                        <input
                            type="text"
                            className="input"
                            required
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" className="label">Contraseña:</label>
                        <input
                            type="password"
                            className="input"
                            required
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <button type="submit" className="btn">Ingresar</button>
                </form>
            </div>
        </AdminLayout>
    );
}