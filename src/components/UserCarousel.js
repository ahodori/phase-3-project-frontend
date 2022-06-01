import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserCarousel({ userArray }) {
  console.log(userArray);
  let renderUsers = userArray.map((user) => {
    return (
      <Carousel.Item>
        <img className="d-block w-100" src={user.image_URL} alt={user.name} />
        <Carousel.Caption>
          <h3>{user.name}</h3>
          <p>{user.location}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12"></div>
        </div>
        <div className="row">
          <div className="col-12">
            <Carousel interval={null}>{renderUsers}</Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCarousel;
