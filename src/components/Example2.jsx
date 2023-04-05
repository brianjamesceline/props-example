import React from 'react'

// DIFFERENT WAYS OF USING PROPS

// function Dog ({name, age}){
//   return (
//     <div>
//       <p>My pet's name is {name} and he is {age} years of age</p>
//       <p>Dog name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

function Dog (props) {
  return (
    <div>
      <p>My pet's name is {props.name} and he is {props.age} years of age</p>
      <p>Dog name: {props.name}</p>
      <p>Age: {props.age}</p>
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
