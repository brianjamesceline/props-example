import React from 'react'

function Child(props) {
  const { name, age, isStudent } = props //DESTRUCTURING
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      {/* Ternary Operator or If Statement.  If isStudent is true it will print Yes and if false it will print No */}
      <p>Is student? {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
// OPTION 2 FOR WRITING PROPS
// function Child(props) {
//   return (
//     <div>
//       <p>Name: {prop.name}</p>
//       <p>Age: {prop.age}</p>
//       <p>Is student? {prop.isStudent ? "Yes" : "No"}</p>
//     </div>
//   );
// }



// export default function Example3() {
//   return (
//     <Child name="David" age={29} isStudent={false} />
//   )
// }

export default function Example3() {
  const person = { //CURLY BRACKETS REPRESENTS AN OBJECT...
    //VARIABLES
    name: "David",
    age: 29,
    isStudent: false
  }

  return (
    <Child {...person} />  //THIS IS KNOWN AS SPREAD OPERATOR
  )
}