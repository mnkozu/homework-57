import React from 'react'
import {User} from "../../types";

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="list-group">
      <div className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <h6 className="mb-1">name: {user.name}</h6>
          <small className="text-muted">{user.isActive ? "active" : "inactive"}</small>
        </div>
        <p className="mb-1">email: {user.email}</p>
        <small className="text-muted">Role: {user.role}</small>
      </div>
    </div>
  );
};

export default UserItem;