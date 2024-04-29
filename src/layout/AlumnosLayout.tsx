import '../styles/Navbar.css';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: DefaultLayoutProps) {
  return (
    <>
    <header>
      <nav className="navbar">
        <div className="name_titulo">Pasantía alumno</div>
        <ul className="menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/">Reuniones</a></li>
          <li><a href="#">Evaluaciones</a></li>
          <li className="submenu">
            <a href="#">Inscripciones</a>
            <ul className="submenu-content">
              <li><a href="#">Inscripción pasantía</a></li>
              <li><a href="#">Inscripción proyecto</a></li>
            </ul>
          </li>

        </ul>
      </nav>
    </header>
    <main>{children}</main>
    
    </>
  );
  }