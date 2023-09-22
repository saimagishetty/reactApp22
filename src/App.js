import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState();
  const x = new XMLHttpRequest()
  const getdata = () =>{
    x.open('GET', 'https://api.publicapis.org/entries');
    x.onload = function () {
      if (x.status === 200) {
        setData(JSON.parse(x.responseText))
      }
    }
    x.send()
    console.log(data)
    console.log(data)
  }
  
  // const increase = () =>{
  //   if(value===10){
  //     return
  //   }
  //   else{
  //     setCount(value + 1)
  //   }  }
  // const deincrease = () =>{
  //   if(value===0){
  //     return
  //   }
  //   else{
  //     setCount(value - 1)
  //   }
  // }
  return (
    <div className="App">
      {/* <div>{value}</div>
      <button onClick={increase} > + </button>
      <button onClick={deincrease} > - </button> */}
    </div>
  );
}

export default App;
