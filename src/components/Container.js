import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import SelectUser from './SelectUser';
import CompareUsers from './CompareUsers';
import EditUser from './EditUser';

// import './Container.css';

function Container() {
  const [userArray, setUserArray] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [allCountryArray, setAllCountryArray] = useState([])

  // useEffect(() => {
  //   fetch('URL')
  //     .then((res) => res.json())
  //     .then((data) => setUserArray(data));
  // }, []);

  useEffect(() => {
    fetch()
  }, [])

  return (
    < div className="Container" >
      <Routes>
        <Route
          path="/"
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
    </div >
  );
}

export default Container;
