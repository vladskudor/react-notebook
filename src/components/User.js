import React, { useState } from 'react';
import { AiOutlineClose , AiOutlineEdit , AiOutlineCaretRight} from "react-icons/ai";
import Form from './Form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './style.css';

export default function User(props) {
    let [edit , setEdit] = useState(false);
    const dispatch = useDispatch(); 

    let styleBlockUser = {
        display: edit && 'flex',
        flexWrap: edit && 'wrap',
    }

  return (
    <div className="block-user-property" style={styleBlockUser}>
        {edit && <Form users={props.users} user={props.user} addUser={props.editUser}/>}
        <div>
            <div style={{borderTop: '1px solid yellow'}} className='property'>
                Id:
            </div>
            <div className='property'>
                Name:
            </div>
            <div className='property'>
                Surname:
            </div>
            <div className='property'>
                Age:
            </div>  
            <div className='property'>
                Tel:
            </div> 
            <div className='property'>
                Email:
            </div> 
        </div>
        <div>
            <div style={{borderTop: '1px solid yellow'}} className='property'>
                {props.user.id}
            </div>
            <div className='property'>
                {props.user.name}
            </div>
            <div className='property'>
                {props.user.surname}
            </div>
            <div className='property'>
                {props.user.age}
            </div>  
            <div className='property'>
                {props.user.tel}
            </div> 
            <div className='property'>
                {props.user.email}
            </div> 
        </div>
        <div className="block-user-buttons" style={{flexDirection: !edit ? 'column' : 'row' , width: edit ? '100%' : 'auto' , flexDirection: edit ? 'row-reverse' : 'center'}}>
            <AiOutlineClose id='edit-button' onClick={() => {
                    props.deleteUser(props.user.id);
                    dispatch({type: 'DEL_DATA' , payload: props.user.id})
                }
            }/>
            <AiOutlineEdit id='edit-button'  onClick={() => {
                    setEdit(!edit);
                } 
            }/>
            <Link id='edit-button' to={`/advanced/${props.user.id + 1}/${props.user.name}/${props.user.surname}/${props.user.age}/${props.user.tel}/${props.user.email}/${props.user.toDrink}/${props.user.additionalInfo}`}>
                <AiOutlineCaretRight style={{color: '#17b0d0'}} />
            </Link>
        </div>
    </div>
  )
}
