import React, { useState, useEffect } from 'react';

// import './CreateUserForm.css';

function CreateUserForm({ allStateArray, allCountryArray }) {
  const [name, setName] = useState('')
  const [hometown, setHometown] = useState('')
  const [image, setImage] = useState('')
  const [visitArray, setVisitArray] = useState([])
  // const [wantsToVisitArray, setWantsToArray] = useState([])

  function handleSubmit() {
    const newUserArr = {
      name: name,
      location: hometown,
      imageURL: image,
      visitArray: visitArray
    }
    // setCountryArray([])
  }

  return (
    <div className="create-user-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Hometown"
          value={hometown}
          onChange={e => setHometown(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
      </form>
    </div>
  )
}

export default CreateUserForm;

// {
//   country: "Mexico",
//     has_visited: false,
//       wants_to_visit: false
// }

// check - does the object with country name exist?
//         -if not, create this object
//       - did we click has_visited or wants_to_visit
//         -!value