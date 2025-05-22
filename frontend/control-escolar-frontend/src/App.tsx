// src/App.tsx
import React, { useState } from 'react';
import { Form } from './components/Form';
import { Table } from './components/Table';
import { Navbar } from './components/navbar';
import { TablaRegistrosGrade1} from './components/TablaRegistrosGrade1';
import { TablaRegistrosGrade2 } from './components/tablaRegistrosGrade2';
import { TablaRegistrosGrade3 } from './components/TablaRegistrosGrade3';

function App() {
  const [activeComponent, setActiveComponent] = useState<string>("");

  const handleNavigation = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <Navbar handleNavigation={handleNavigation} />
        </div>
        <div className="row">
          <div className="col-12">
            {activeComponent === "1grado" && (
              <>
                <Form />
                <Table />
              </>
            )}
          </div>
        <div className="col-12">
            {activeComponent === "1ro" && (
              <>
                <Form />
                <TablaRegistrosGrade1 />
              </>
            )}
          </div>
          <div className="col-12">
            {activeComponent === "2do" && (
              <>
                <Form />
                <TablaRegistrosGrade2 />
              </>
            )}
          </div>
          <div className="col-12">
            {activeComponent === "3ro" && (
              <>
                <Form />
                <TablaRegistrosGrade3 />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
