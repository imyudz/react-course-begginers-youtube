import './App.css';
import User from './components/User';
import Planet from './components/Planet';
import { useState } from 'react';



/* ******* Exercício com useState hook ******** 
function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <button onClick={()=>{setValue(value + 1)}}>Increase</button>
      <button onClick={()=>{setValue(value - 1)}}>Decrease</button>
      <button onClick={()=>{setValue(0)}}>Set to zero</button>
      <h1>{value}</h1>
    </div>
  );
}
*/


/* ******* Trabalhando com useState hook ******** 


function App() {

  const [age, setAge] = useState(0);
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");

  const increaseAge = () => {
    setAge(age + 1);
  }

  return (
    <div className='App'>
      <p>{age}</p>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={()=>{setShowText(!showText)}}>Show/Hide Text</button>
      <button onClick={()=>{setTextColor(textColor === "green" ? "black" : "green")}}>Change Text Color</button>
      {showText && <h1 style={{color: textColor}}>TEXT TO BE MANIPULATED</h1>}
    </div>
  )
}

*/






/* ******* Exercício de Listas: Mostrar apenas os planetas gasosos ******** 
function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Venus", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Neptune", isGasPlanet: true },
    { name: "Pluto", isGasPlanet: false },
    { name: "Uranus", isGasPlanet: true },
  ]

  return <div className='App'>
    {
      planets.map((planetInfo) => {
        return <Planet name={planetInfo.name} isGasPlanet={planetInfo.isGasPlanet}></Planet>
      })
    }
  </div>
}

/*







/* *******Trabalhando com Listas ******** 
function App() {
  const users = [
    { name: "Pedro", age: 21 },
    { name: "Jake", age: 25 },
    { name: "Jessica", age: 45 },
  ];

  const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin"];
  return (
    <div className="App">
      {names.map((value, index) => {
          return <h1 key={index}>{value}</h1>;
      })}
      {users.map((user, index) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}
*/




/* *******Trabalhando com Funções ******** 
function App() {

  
  return (
    <div className="App">
      <Job salary={15000} position="Senior SDE" company="Amazon"></Job>
      <Job salary={3500} position="Junior Front-End Developer" company="Itaú"></Job>
      <Job salary={7600} position="Data Analyst" company="IBM"></Job>
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.position}</h1>
      <p>{props.company}</p>
      <p>R${props.salary}</p>
    </div>
  );
}
*/


export default App;
