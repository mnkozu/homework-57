import React, {useState} from 'react';
import {User, UserMutation} from "../../types";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    isActive: false,
    role: '',
  });

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user,
    });
  };

  const onUserChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setUser(prev => ({...prev, [name]: value}));
  };

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    setUser(prev => ({...prev, [name]: checked}));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name" name="name" type="text" required
          className="form-control"
          value={user.name}
          onChange={onUserChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email" name="email" type="email" required
          className="form-control"
          value={user.email}
          onChange={onUserChange}
        />
      </div>
      <div className="form-group py-2 pe-2">
        <label className="py-2 pe-2">is active</label>
        <input
          id="isActive" name="isActive" type="checkbox"
          checked={user.isActive}
          onChange={onCheckboxChange}
        />
      </div>
      <div className="form-group mb-2">
        <select
          id="role" name="role" required
          className="form-control"
          value={user.role}
          onChange={onUserChange}
        >
          <option disabled value="">Select a role!</option>
          <option>User</option>
          <option>Editor</option>
          <option>Admin</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success">Create</button>
    </form>
  );
};

export default UserForm;