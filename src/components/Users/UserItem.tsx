import React from 'react';

const UserItem = () => {
  return (
    <div className="list-group">
      <div className="list-group-item">
        <div className="d-flex w-100 justify-content-between">
          <h6 className="mb-1">name:</h6>
          <small className="text-muted">active</small>
        </div>
        <p className="mb-1">email:</p>
        <small className="text-muted">Role:</small>
      </div>
    </div>
  );
};

export default UserItem;