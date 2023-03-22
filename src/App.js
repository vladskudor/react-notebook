import './App.css';
import Routers from './components/Routers'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Wallp from '../src/images/wallp.jpg'
import MobileWallp from '../src/images/mobile-wallp.jpg'

function App() {
  // let [users , setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []); 
  let [users , setUsers] = useState(useSelector(state => state.users.users)); 

  return (
    <div className='block-app'>
      <img src={Wallp} />
      <div className="App" style={{
        background: window.matchMedia(`(max-width: 600px)`).matches && `url(${MobileWallp})`,
        backgroundAttachment: 'fixed',
        backgroundPositionX: 'right',
        backgroundPositionY: window.matchMedia(`(max-width: 575px)`).matches && 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: window.matchMedia(`(max-width: 1920px)`).matches && '100%',
        height: '100vh'}}>
        <Routers users={users} />
      </div>
    </div>
    
  );
}

export default App;
