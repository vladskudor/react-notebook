import './App.css';
import Routers from './components/Routers'
import { useState } from 'react';

function App() {
  let [users , setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []); 

  return (
    <div className="App">
      <Routers users={users} />
    </div>
  );
}

export default App;
