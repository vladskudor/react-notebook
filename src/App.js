import './App.css';
import Routers from './components/Routers'
import { useState } from 'react';
import { useSelector } from 'react-redux';


function App() {
  // let [users , setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []); 
  let [users , setUsers] = useState(useSelector(state => state.users.users)); 

  return (
    <div className="App">
      <Routers users={users} />
    </div>
  );
}

export default App;
