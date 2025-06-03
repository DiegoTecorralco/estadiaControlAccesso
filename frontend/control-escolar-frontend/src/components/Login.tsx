import { useState } from "react";
import logoCentroEscolar from "../assets/logo_centro_escolar.jpg";

export const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3100/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Credenciales incorrectas");
        return;
      }

      localStorage.setItem("token", data.token);
      onLogin();
    } catch (err) {
      setError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "450px", width: "100%" }}>
        <div className="text-center mb-4">
          <img src={logoCentroEscolar} alt="Logo Centro Escolar" style={{ width: "100px" }} />
          <h3 className="mt-3 text-primary fw-bold">Centro Escolar General Rafael Cravioto Pacheco</h3>
          <p className="text-muted" style={{ fontSize: "0.9rem" }}>
            Sistema de control de asistencia para el bachillerato matutino. Ingrese sus credenciales para acceder a la plataforma.
          </p>
          <h3 className="mt-3 text-primary fw-bold">Inicio de sesión</h3>

        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-control mb-3"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control mb-3"
          />
          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>

        {error && <p className="text-danger text-center mt-3">{error}</p>}
      </div>
    </div>
  );
};
