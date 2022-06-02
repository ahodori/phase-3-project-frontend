import React, { useState, useEffect } from 'react';
import CreateUserForm from './CreateUserForm';
import { Card } from 'react-bootstrap';

// import './UserCard.css';

function UserCard({ user }) {
  const wantsArray = user?.visits.filter((visit) => visit.want_to_visit);
  const visitedArray = user?.visits.filter((visit) => visit.visited);

  return (
    <Card className="UserCard" style={{ width: '25rem' }}>
      <Card.Img src={user?.image_URL}></Card.Img>
      <Card.Title>{user?.name}</Card.Title>
      <Card.Subtitle>{user?.location}</Card.Subtitle>
      <Card.Text>
        Has visited: <br />
        {visitedArray?.map((visit) => {
          return <span key={visit.id}>•{visit.location.country} </span>;
        })}{' '}
        <br />
        Wants to visit: <br />
        {wantsArray?.map((visit) => {
          return <span key={visit.id}>•{visit.location.country} </span>;
        })}
      </Card.Text>
    </Card>
  );
}

export default UserCard;
