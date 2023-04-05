import React from 'react'

function Dog ({name, age}){
  return (
    <div>
      <p>My pet's name is {name} and he is {age} years of age</p>
      <p>Dog name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default function Example2() {
  return (
    <div>
      <Dog name = "Fufu" age = {3} />
      <Dog name = "Hercules" age = {5} />
    </div>
  );
}
