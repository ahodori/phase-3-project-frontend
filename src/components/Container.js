import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SelectUser from './SelectUser';
import CompareUsers from './CompareUsers';
import EditUser from './EditUser';

import './Container.css';

function Container() {
  [userArray, setUserArray] = useState([]);
  [selectedUser, setSelectedUser] = useState({});

  // useEffect(() => {
  //   fetch('URL')
  //     .then((resp) => resp.json())
  //     .then((data) => setUserArray(data));
  // }, []);

  return (
    <div className="Container">
      <Routes>
        <Route
          path="/select_user"
          element={<SelectUser userArray={userArray} />}
        />
        <Route
          path="/compare_users"
          element={
            <CompareUsers userArray={userArray} selectedUser={selectedUser} />
          }
        />
        {/* Possible Dynamic Path Needed: */}
        <Route
          path="/edit_user"
          element={<EditUser selectedUser={selectedUser} />}
        />
      </Routes>
    </div>
  );
}

export default Container;
