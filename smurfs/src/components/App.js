import React, {useState, useEffect} from "react";
import "./App.css";
import Member from './Member';

const App = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  useEffect(props.fetchSmurfs, []);
  const handleSubmit = event => {
    event.preventDefault();
    props.postSmurfs({name, age, height});
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Name' value={name} onChange={event => setName(event.target.value)}/>
          <input type='text' placeholder='Age' value={age} onChange={event => setAge(event.target.value)}/>
          <input type='text' placeholder='Height' value={height} onChange={event => setHeight(event.target.value)}/>
          <input type='submit' />
        </form>
      </div>
      <div>
        {props.loading ? 'Loading...' : null}
        {props.error ? 'There was an error.' : null}
        {props.members.length ? props.members.map(smurf => <Member key={smurf.id} smurf={smurf}/>) : null}
      </div>
    </div>
  );
}

export default App;
