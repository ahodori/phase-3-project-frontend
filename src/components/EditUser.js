import React, { useState, useEffect } from 'react';
import EditUserForm from './EditUserForm';

import './EditUser.css';

function EditUser({ selectedUser }) {
  return (
    <div className="EditUser">
      <EditUserForm />
    </div>
  );
}

export default EditUser;
