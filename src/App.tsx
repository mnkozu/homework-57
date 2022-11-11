import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import Toolbar from "./components/Toolbar/Toolbar";
import Users from "./components/Users/Users";
import {User} from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Nurkyz', email: 'nurkyzmamatnazar@gmail.com', isActive: true, role: 'Admin'},
  ]);

  const addUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
  };

  return (
    <>
      <header>
        <Toolbar/>
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
