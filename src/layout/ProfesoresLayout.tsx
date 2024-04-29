import '../styles/Navbar.css';

export default function ProfesoresLayout() {
  return (
    <nav className="navbar">
      <div className="name_titulo">Profesor</div>
      <ul className="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Reuniones</a></li>
        <li><a href="#">Evaluaciones</a></li>
        <li><a href="#">Dashboard</a></li>
      </ul>
    </nav>
  );
}