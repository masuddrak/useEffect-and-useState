import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
    </div>
  );
}
function ExternalUser() {
  const [users,setUsers]=useState([])
  return (
    <div className="externalUser">
      <h2>External User</h2>
    </div>
  );
}

export default App;
