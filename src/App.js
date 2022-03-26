import { useEffect, useState } from 'react';
import './App.css';
import Card from './card/Card';

function App() {
  const [guns , setGuns]=useState([]);
useEffect(() => {
  fetch("data.json")
  .then((res) => res.json())
  .then((data) => setGuns(data));
},[]);

  return (
    <div>
      <h1>Random Gun Picker</h1>
      
      {
        guns.map(gun => <Card key={gun.id} gunData ={gun}/>)
      }
    </div>
  );
}

export default App;
