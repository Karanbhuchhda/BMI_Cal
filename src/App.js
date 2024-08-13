import logo from "./logo.svg";
import "./App.css";
import React,{useState} from "react";

function App() {


  const[weight,setWeight] = useState(0);
  const[height,setHeight] = useState(0);
  const[bmi,setbmi] = useState('');
  const[message,setMessage] = useState('');


  let CalcBMi = (e) => {

    e.preventDefault();

    if(weight===0 || height===0)
    {
      alert('Please the correct weight and height')
    }
    else{
      let bmi=((weight/(height*height)*703)/100)
      setbmi(bmi.toFixed(1))
    }

    if(bmi<25)
    {
      setMessage('You are under weight')
    }
    else if(bmi>=25 && bmi<30)
    {
      setMessage('You are healthy')
    }
    else{
      setMessage('You are OverWeight')
    }
  }

  let reload=() =>{
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={CalcBMi}>
          <div>
            <label>Weights lbs: </label>
            <input
              type="text"
              placeholder="Enter the weight value"
              value={weight}
              onChange={(e)=> setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Heights lbs: </label>
            <input
              type="text"
              placeholder="Enter the Height value"
              value={height}
              onChange={(e)=> setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
            <h2>Made by Karan Bhuchhda</h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
