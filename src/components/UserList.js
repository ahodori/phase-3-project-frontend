import React, { useState, useEffect } from 'react';

// import './UserList.css';

function UserList({userArray, handleSelectedUserChange}) {

  function onClickUser(event, user) {
    event.preventDefault();
    handleSelectedUserChange(user);
  }


  return <div className="UserList">
    {userArray.map((user) => {
      return <p key={user.id} onClick={(e) => onClickUser(e, user)}>{user.name} - {user.location}</p>;
    })}
  </div>;
}

export default UserList;
