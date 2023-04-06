import React from 'react'

export default function Example5() {
  // variable
  const name = 'John Doe'; // string - anything that has single quotes or double quotes
  const age = 30; // number

  // array
  // arrays always start with a 0
  // hobbies represents a variable
  const hobbies = ["movies", "music", "sports"]; //array

  // object
  // map function

  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
      <div>{hobbies[2]}</div>
    </>
  );
}
