import logo from './logo.svg';
import './App.css';

function App() {

  const number = 5555;
  const singer = {
    name: 'Dr. Mahfuz',
    job: 'kan jhalapala kora'
  }
  const singer2 = {
    name: 'Eva Rahman',
    job: 'kokil konthi gaan er pakhi'
  }

  const singerStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: 10
  }


  return (
    <div className="App">
      <header className="App-header">
        <h3>Yo yo react mama!!!</h3>
        <p>Happy happy raect</p>
        <div className="container">
          <h3>This is inside my container</h3>
          <p>my number is: {number}</p>
          <p>my fvrt number is: {60 + 105}</p>
          <p style={{
            backgroundColor: 'red',
            color: 'white',
            padding: 10
          }}>Singer: {singer.name + ' ' + singer.job}</p>
          <p style={singerStyle}>Real Singer: {singer2.job}</p>
          {/* <p>Singer: {singer.name}</p>
          <p>Job: {singer.job}</p> */}
        </div>
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
    </div>
  );
}

export default App;
