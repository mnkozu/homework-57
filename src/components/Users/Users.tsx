import React from 'react';
import UserItem from "./UserItem";

const Users = () => {
  return (
    <>
      <h4 className="mb-4 ps-3">Users</h4>
      <UserItem/>
      <UserItem/>
    </>
  );
};

export default Users;