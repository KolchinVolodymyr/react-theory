import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Car name={'Ford'} year={2018}/>
      <Car name={'Mazda'} year={2016}>
        <p>COLOR</p>
      </Car>
      <Car name={'Audi'} year={2012}/>
    </div>
  );
}

export default App;
