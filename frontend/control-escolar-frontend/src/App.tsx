// src/App.tsx
import React, { useState } from 'react';
import { Form } from './components/Form';
import { Table } from './components/Table';
import { Navbar } from './components/navbar';

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
            {activeComponent === "student" && (
              <>
                <Form />
                <Table />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
