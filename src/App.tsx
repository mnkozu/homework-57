import React from 'react';
import UserForm from "./components/UserForm/UserForm";
import Toolbar from "./components/Toolbar/Toolbar";
import Users from "./components/Users/Users";

function App() {
  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col">
            <UserForm/>
          </div>
          <div className="col">
            <Users/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
