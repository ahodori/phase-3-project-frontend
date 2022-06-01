import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

// import './UserList.css';

function UserList({userArray, handleSelectedUserChange}) {
  let navigate = useNavigate();

  function onClickUser(event, user) {
    event.preventDefault();
    handleSelectedUserChange(user);
    navigate("../compare_users");
  }


  return <div className="UserList">
            <ul>
              {userArray.map((user) => {
                return <li>
                      <button key={user.id} onClick={(e) => onClickUser(e, user)}>{user.name} - {user.location}</button>
                  </li>;
              })}
           </ul>
        </div>;
}

export default UserList;
