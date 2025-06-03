import React, { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { Table } from './components/Table1grade';
import { Navbar } from './components/navbar';
import { TablaRegistrosGrade1 } from './components/TablaRegistrosGrade1';
import { TablaRegistrosGrade2 } from './components/TablaRegistrosGrade2';
import { TablaRegistrosGrade3 } from './components/TablaRegistrosGrade3';
import { Table2grade } from './components/Table2grade';
import { Table3grade } from './components/Table3grade';
import { Login } from './components/Login';
import logoCentroEscolar from './assets/logo_centro_escolar.jpg';

function App() {
  const [activeComponent, setActiveComponent] = useState("registro");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleNavigation = (component: string) => {
    setActiveComponent(component);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <Navbar handleNavigation={handleNavigation} />
        </div>
        <div className="row">
          <div className="col-12">
            {activeComponent === "registro" && (
              <>
                <div className="text-center my-4">
                  <img src={logoCentroEscolar} alt="Logo Centro Escolar" style={{ width: '150px' }} />
                  <h1 className="mt-3">Registros Bachillerato Matutino Centro Escolar General Rafael Cravioto Pacheco</h1>
                </div>
                <Form />
              </>
            )}
          </div>
          <div className="col-12">{activeComponent === "1ro" && <><Form /><TablaRegistrosGrade1 /></>}</div>
          <div className="col-12">{activeComponent === "2do" && <><Form /><TablaRegistrosGrade2 /></>}</div>
          <div className="col-12">{activeComponent === "3ro" && <><Form /><TablaRegistrosGrade3 /></>}</div>
          <div className="col-12">{activeComponent === "1grado" && <Table />}</div>
          <div className="col-12">{activeComponent === "2grado" && <Table2grade />}</div>
          <div className="col-12">{activeComponent === "3grado" && <Table3grade />}</div>
        </div>
      </div>
    </>
  );
}

export default App;
