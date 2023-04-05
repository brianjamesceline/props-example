import React from 'react'
// import Greetings from './Greetings'


//This is another way of showing something on screen without having to import 'Greetings' and we can now delete the file Greetings.jsx from components
function Greetings(props) {
  // Everytime we call Greetings, both props name and prof shall be called.
  // We are destructuring props below and retrieving their values from the Export section below
  const { name, prof, title } = props;   
  return (
    // Below shows how we use props matching what has been used above in the const.
    // <div>Hello Brian I am a Software Eng.</div>
    <div> Hello { title } { name } I am a { prof } </div>
  );
}

export default function Example1() {
  return (
    // <> </> Is known as a fragment
    <div>
      <Greetings name = "Brian" prof = "Software Eng." title = "Mr." />
      <Greetings name = "Janice" prof = "Doctor" title = "Miss."/>
    </div>
  );
}
