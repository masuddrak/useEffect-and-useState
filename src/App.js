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
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div className="externalUser">
      <h2>External User</h2>
      <p>{users.length}</p>
          {
            users.map(user=><Users name={user.name} email={user.email} phone={user.phone}></Users>)
          }
    </div>
  );
}
function Users(props) {
  return (
    <div className="user">
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
      <p>Phone:{props.phone}</p>
    </div>
  );
}


export default App;
