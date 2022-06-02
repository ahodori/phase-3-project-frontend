import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';
import React, { useState, useEffect } from 'react';
import SelectUser from './SelectUser';
import CompareUsers from './CompareUsers';
import EditUser from './EditUser';

// import './Container.css';

function Container() {
  const [userArray, setUserArray] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [allCountryArray, setAllCountryArray] = useState([]);
  const [allStateArray, setAllStateArray] = useState([]);

  let navigate = useNavigate();

  function handleNewUser(userObj) {
    console.log(userObj);
    fetch("http://localhost:9292/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
      .then(res=>res.json())
      .then(json=>{
        console.log(json);
        setSelectedUser(json);
        setUserArray([...userArray, json]);
        navigate('../compare_users');
      })


    // setSelectedUser(userObj);
    // setUserArray([...userArray, userObj]);
    // // Add to backend
    // navigate('../compare_users');
  }

  function handleEditUser(userObj) {
    console.log(userObj);
  }

  //FETCH FOR USERS
  useEffect(() => {
    fetch('http://localhost:9292/users')
      .then((res) => res.json())
      .then((data) => setUserArray(data));
  }, []);

  // FETCH FOR ACCESS TOKEN
  // useEffect(() => {
  //   fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
  //     method: 'GET',
  //     headers: {
  //       "Accept": "application/json",
  //       "api-token": "ZPg_gMQZ6k43rRZWj1OZBGZP0HSb9qBwqBI0-6YaorufXfLcRstsJ4VO3TtTY4NfVNM",
  //       "user-email": "murphymax1@gmail.com"
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then(console.log)
  // }, [])

  // FETCH FOR COUNTRIES
  useEffect(() => {
    fetch('https://www.universal-tutorial.com/api/countries', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdXJwaHltYXgxQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IlpQZ19nTVFaNms0M3JSWldqMU9aQkdaUDBIU2I5cUJ3cUJJMC02WWFvcnVmWGZMY1JzdHNKNFZPM1R0VFk0TmZWTk0ifSwiZXhwIjoxNjU0MTg1NzgyfQ.eZfArIRKzhcVMwaIOVkItOFj59AnOH4P6GgwozEuroc',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then(setAllCountryArray);
  }, []);

  // FETCH FOR STATES
  useEffect(() => {
    fetch('https://www.universal-tutorial.com/api/states/United States', {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdXJwaHltYXgxQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6IlpQZ19nTVFaNms0M3JSWldqMU9aQkdaUDBIU2I5cUJ3cUJJMC02WWFvcnVmWGZMY1JzdHNKNFZPM1R0VFk0TmZWTk0ifSwiZXhwIjoxNjU0MTg1NzgyfQ.eZfArIRKzhcVMwaIOVkItOFj59AnOH4P6GgwozEuroc',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then(setAllStateArray);
  }, []);

  function handleSelectedUserChange(newSelectedUser) {
    setSelectedUser(newSelectedUser);
  }

  return (
    <div className="Container">
      <Routes>
        <Route
          path="/"
          element={
            <SelectUser
              userArray={userArray}
              allCountryArray={allCountryArray}
              allStateArray={allStateArray}
              handleNewUser={handleNewUser}
              handleSelectedUserChange={handleSelectedUserChange}
            />
          }
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
          element={<EditUser selectedUser={selectedUser} allCountryArray={allCountryArray} handleEditUser={handleEditUser}/>}
        />
      </Routes>
    </div>
  );
}

export default Container;
