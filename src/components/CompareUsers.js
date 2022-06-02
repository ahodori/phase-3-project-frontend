import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import UserCard from './UserCard';
import Commonalities from './Commonalities';
import UserCarousel from './UserCarousel';

// import './CompareUsers.css';

function CompareUsers({ userArray, selectedUser }) {
  const [comparedUser, setComparedUser] = useState({});

  function updateComparedUser(obj) {
    setComparedUser(obj);
  }

  let navigate = useNavigate();

  function handleButtonClick() {
    navigate('../edit_user');
  }

  return (
    <div className="CompareUsers">
      <button onClick={handleButtonClick}>Edit</button>
      <UserCard user={selectedUser} />
      ---
      {Object.keys(comparedUser).length > 0 ? <>
        <UserCard user={comparedUser}/>
        <Commonalities selectedUser={selectedUser} comparedUser={comparedUser}/>
      </> : <></>}
      
      <UserCarousel
        userArray={userArray}
        updateComparedUser={updateComparedUser}
      />
    </div>
  );
}

export default CompareUsers;
