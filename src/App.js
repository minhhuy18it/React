import './App.css';
import React, { useState } from 'react';
import Person from './components/Person';
import Example from './components/Example';

function App() {

  const [showPerson, setShowperson] = useState(true);

  const [person, setperson] = useState([
    {name: "huy", age: "22"},
    {name: "hudy", age: "22"},
    {name: "hoang", age: "22"}
  ])

  const deletePerson = (personIndex) => {
    let newperson = [...person];
    newperson.splice(personIndex,1);
    setperson(newperson);
  }

  const switchname = (event) => {
    console.log(event);
    setperson([
      {name: event.target.value, age: "252"},
      {name: event.target.value, age: "55"},
      {name: event.target.value, age: "55"}
    ])
  };

  const togglePerson = () => {
    setShowperson(!showPerson);
  };

  let personList = null;

  const styles = {
    backgroundColor: 'blue',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  if(showPerson===true){
    personList = <div>
      {
        person.map((item, index) => {
          return (
            <Person key={index} changed={switchname} click={() => deletePerson(index)} name={item.name} age={item.age}>dsasda</Person>
          );
        })
      }
    </div>
  }

  return (
    <>

      <div className='App'>
        <h1>This is the first Reactjs App</h1>
        <button style={styles} onClick={()=>togglePerson()}>Toggle Person</button>
        {
          personList
        }
        <Example></Example>
      </div>
    </>
  );
}

export default App;
