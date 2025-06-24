import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
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
import { StudentForm } from './components/StudentForm';


interface DecodedToken {
  exp: number;
}

function App() {
  const [activeComponent, setActiveComponent] = useState("registro");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessionExpired, setSessionExpired] = useState(false);

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const decoded = jwtDecode<DecodedToken>(token);
          const currentTime = Date.now() / 1000;

          if (decoded.exp < currentTime) {
            // Token expirado
            localStorage.removeItem("token");
            setIsAuthenticated(false);
            setSessionExpired(true);
          } else {
            setIsAuthenticated(true);
            setSessionExpired(false);
          }
        } catch (error) {
          console.error("Token inválido", error);
          localStorage.removeItem("token");
          setIsAuthenticated(false);
          setSessionExpired(true);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkToken();
    const interval = setInterval(checkToken, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setSessionExpired(false);
  };

  const handleNavigation = (component: string) => {
    setActiveComponent(component);
  };

  if (!isAuthenticated) {
    return (
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div>
          {sessionExpired && (
            <div className="card text-center mb-4 shadow" style={{ padding: '1rem' }}>
              <div className="card-body">
                <h5 className="card-title text-danger">Sesión expirada</h5>
                <p className="card-text">Tu sesión ha expirado por seguridad. Por favor, vuelve a iniciar sesión.</p>
              </div>
            </div>
          )}
          <Login onLogin={handleLogin} />
        </div>
      </div>
    );
  }

  return (
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
        <div className="col-12">
          {activeComponent === "añadir" && (
            <>
              <div className="text-center my-4">
                <img src={logoCentroEscolar} alt="Logo Centro Escolar" style={{ width: '150px' }} />
                <h1 className="mt-3">Registrar Estudiante Nuevo</h1>
              </div>
              <StudentForm />
            </>
          )}
        </div>
        </div>
        <div className="col-12">{activeComponent === "1ro" && <><Form /><TablaRegistrosGrade1 /></>}</div>  
        <div className="col-12">{activeComponent === "2do" && <><Form /><TablaRegistrosGrade2 /></>}</div>
        <div className="col-12">{activeComponent === "3ro" && <><Form /><TablaRegistrosGrade3 /></>}</div>
        <div className="col-12">{activeComponent === "1grado" && <Table />}</div>
        <div className="col-12">{activeComponent === "2grado" && <Table2grade />}</div>
        <div className="col-12">{activeComponent === "3grado" && <Table3grade />}</div>
      </div>
    </div>
  );
}

export default App;