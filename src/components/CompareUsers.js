import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import Commonalities from './Commonalities';
import UserCarousel from './UserCarousel';

// import './CompareUsers.css';

function CompareUsers({ userArray, selectedUser }) {
  return (
    <div className="CompareUsers">
      <UserCard user={selectedUser} />

      ---
      
      <UserCard />
      <Commonalities />
      <UserCarousel />
    </div>
  );
}

export default CompareUsers;
