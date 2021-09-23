import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'Bapparaj', 'kuber', 'bappi', 'shuvo', 'alu', 'halum'];

  const cinemas = [
    { nayok: 'Kuber', nayika: 'kopila' },
    { nayok: 'Rubel', nayika: 'Moushumi' },
    { nayok: 'Razzak', nayika: 'Shabana' },
    { nayok: 'Jashim', nayika: 'Shuchorita' }
  ]

  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }

      </ul>

     {/*  <Cinema nayok="J Bond" nayika="Cat W"></Cinema> */}

      { 
      cinemas.map(cinema=> <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }

    </div>
  );
}

/* 
<p id="title">Title</p>
      <Person  name="Rubel" nayika="Moushumi"></Person>
      <Person name="Bapparaj" nayika="Cheka"></Person>
      <Person name="kuber" nayika="kopila"></Person> 
      
      <Friend phone="0189647486" address="Noakhali"></Friend>
      <Friend phone="0159464245" address="Barishal"></Friend>
      <Friend phone="01393546" address="Jassore"></Friend>
      <Friend phone="01393546243" address="Dhaka"></Friend>
      */


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

function Cinema(props) {
  return (
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  );
}


/* 

<Person name={nayoks[0]} nayika="Moushumi"></Person>
<Person name={nayoks[1]} nayika="Cheka"></Person>
<Person name={nayoks[2]} nayika="kopila"></Person> */

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
