import React, { useState, useEffect } from 'react';
import CreateUserForm from './CreateUserForm';
import { Card } from 'react-bootstrap';

// import './UserCard.css';

function UserCard({user}) {
  return <Card className="UserCard">
    <Card.Img src={user?.image_URL}></Card.Img>
    <Card.Title>{user?.name}</Card.Title>
    <Card.Subtitle>{user?.location}</Card.Subtitle>
  </Card>;
}

export default UserCard;
