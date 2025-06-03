export const Navbar = ({ handleNavigation }: { handleNavigation: (component: string) => void }) => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload(); // Recarga para volver al login
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom mb-3">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">Control Escolar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        > 
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto d-flex align-items-center gap-3">
            <li className="nav-item d-flex align-items-center gap-2">
              <span className="fw-semibold text-primary">Registro:</span>
              <button className="btn btn-outline-primary btn-sm" onClick={() => handleNavigation("registro")}>registro general</button>
            </li>

            {/* Sección Registros */}
            <li className="nav-item d-flex align-items-center gap-2">
              <span className="fw-semibold text-primary">Registros:</span>
              <button className="btn btn-outline-primary btn-sm" onClick={() => handleNavigation("1ro")}>registro 1° grado</button>
              <button className="btn btn-outline-primary btn-sm" onClick={() => handleNavigation("2do")}>registro 2° grado</button>
              <button className="btn btn-outline-primary btn-sm" onClick={() => handleNavigation("3ro")}>registro 3° grado</button>
            </li>

            {/* Sección Listas */}
            <li className="nav-item d-flex align-items-center gap-2">
              <span className="fw-semibold text-success">Listas:</span>
              <button className="btn btn-outline-success btn-sm" onClick={() => handleNavigation("1grado")}>lista 1° grado</button>
              <button className="btn btn-outline-success btn-sm" onClick={() => handleNavigation("2grado")}>lista 2° grado</button>
              <button className="btn btn-outline-success btn-sm" onClick={() => handleNavigation("3grado")}>lista 3° grado</button>
            </li>
          </ul>

          {/* Botón de cerrar sesión */}
          <div className="d-flex">
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
