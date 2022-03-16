import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
    </div>
  );
}
function ExternalUser() {
  const [users,setUsers]=useState([]);
  console.log(users)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div className="externalUser">
      <h2>External User</h2>
    </div>
  );
}

export default App;
