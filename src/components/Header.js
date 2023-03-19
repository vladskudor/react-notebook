import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import { useParams } from 'react-router-dom';

export default function Header(props) {
  let {info} = useParams();
  return (
    <div className='block-header'>
      <h1>Users</h1>
      {props.media.matches && !info ? <AiOutlineMenu  style={{cursor: 'pointer' , color: '#17b0d0'}} onClick={() => props.stateMenu()} /> : false}
    </div>
   
  )
}
