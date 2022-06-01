import React, { useState, useEffect } from 'react';
import CreateUserForm from './CreateUserForm';

import './SelectUser.css';

function SelectUser({ userArray }) {
  return (
    <div className="SelectUser">
      <CreateUserForm />
      <UserList />
    </div>
  );
}

export default SelectUser;
