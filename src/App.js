import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>

    </div>
  );
}

function Person() {
  const person = {
    backgroundColor: '#61dafb',
    border: '3px solid lightsalmon',
    borderRadius: '20px',
    margin: '10px'
  }
  return (
    //method 1
    <div style={person}>
      <h1>Sakib Al Hasan</h1>
      <h4>Profession: Cricketer</h4>
    </div>

//method 2 for styling
    // <div style={{
    //   backgroundColor: '#61dafb',
    //   border: '3px solid lightsalmon',
    //   borderRadius: '20px',
    //   margin: '10px'
    // }}>
    //   <h1>Sakib Al Hasan</h1>
    //   <h4>Profession: Cricketer</h4>
    // </div>
  );
}
export default App;
