import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import Commonalities from './Commonalities';
import UserCarousel from './UserCarousel';

// import './CompareUsers.css';

function CompareUsers({ userArray, selectedUser }) {
  const [comparedUser, setComparedUser] = useState({});

  return (
    <div className="CompareUsers">
      <UserCard user={selectedUser} />
      ---
      <UserCard comparedUser={comparedUser} />
      <Commonalities />
      <UserCarousel userArray={userArray} />
    </div>
  );
}

export default CompareUsers;
