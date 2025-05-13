// src/components/Navbar.tsx
export const Navbar = ({ handleNavigation }: { handleNavigation: (component: string) => void }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleNavigation("student")}>2to semestre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleNavigation("classroom")}>4to semestre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleNavigation("teacher")}>6to semestre</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
