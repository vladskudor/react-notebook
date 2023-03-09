import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {AiOutlineDoubleLeft} from 'react-icons/ai';
import './style.css'

export default function Info(props) {
  let {id , name , surname , age , toDrink , additionalInfo} = useParams();  
  let [info , setInfo] = useState('');
  let [currentInfo , setCurrentUserInfo] = useState(''); 

  let addInfo = () => {
    for(let user = 0;user < props.users.length;user++){
      if(id == props.users[user].id + 1){
        setCurrentUserInfo(props.users[user].additionalInfo);
        props.users[user].additionalInfo = info;
        localStorage.setItem('users' , JSON.stringify(props.users));
      }
    }
    window.location.reload();
  }

  useEffect(() => {
    for(let user = 0;user < props.users.length;user++){
      if(id == props.users[user].id + 1){
        setCurrentUserInfo(props.users[user].additionalInfo);
      }
    }
  } , [])

  return (
    <div>
      <div className="button-back">
        <Link style={{
          textDecoration: 'none',
          fontSize: '22px',
          background: '#808080',
          color: '#000',
          borderRadius: '10px',
          padding: '10px 20px' ,
          textTransform: 'uppercase',
          fontWeight: 600
          }} to="/"><AiOutlineDoubleLeft /></Link>
      </div>
      <div className='info-block'>
        <div>
          <div>id: {id}</div>
          <div>name: {name}</div>
          <div>surname: {surname}</div>
          <div>age: {age}</div>
        </div>
        <div>
          Bio: {toDrink ? 'Yes' : 'no'}
        </div>
        <div>
          Additional info: {currentInfo ? currentInfo : additionalInfo}
        </div>
      </div>
      <div className='block-addition-info'>
          <textarea placeholder='Additional info' onChange={(e) => setInfo(e.target.value)}></textarea>
          <button onClick={addInfo}>Set</button>
      </div>
    </div>
  )
}
