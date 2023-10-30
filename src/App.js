import './App.css';

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

export default App;
