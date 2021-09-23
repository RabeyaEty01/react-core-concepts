import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">

      <p id="title">Title</p>
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person name="Bapparaj" nayika="Cheka"></Person>
    
      <Friend phone="0189647486" address="Noakhali"></Friend>
      <Friend phone="0159464245" address="Barishal"></Friend>
      
    </div>
  );
}

/* 
<p id="title">Title</p>
      <Person  name="Rubel" nayika="Moushumi"></Person>
      <Person name="Bapparaj" nayika="Cheka"></Person>
      <Person name="kuber" nayika="kopila"></Person> */


function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: '#61dafb',
    border: '3px solid lightsalmon',
    borderRadius: '20px',
    margin: '10px'
  }
  return (
    //method 1
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Hero of: {props.nayika}</h4>
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

function Friend(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>Phone: {props.phone}</h1>
      <h4>Address: {props.address}</h4>
    </div>
  );
}
export default App;
