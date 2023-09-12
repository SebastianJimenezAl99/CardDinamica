
import './App.css'
import Card from './components/card/Card'
import { useEffect, useState } from 'react'


function App() {
  const [data, setData] = useState(null);

  function cargarApi() {
    fetch("https://api.adviceslip.com/advice")
      .then((res)=> res.json())
      .then((json)=> setData(json));
  }

  useEffect(()=>{
    cargarApi();
  },[]);

  return (
    <div className='contenedor'>
      {
        data ? <Card id={data.slip.id} advice={data.slip.advice} fun={cargarApi}/> : "es null" 
      }
    </div>
  )
}

export default App
