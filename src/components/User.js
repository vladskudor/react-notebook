import React, { useState } from 'react';
import { AiOutlineClose , AiOutlineEdit , AiOutlineCaretRight} from "react-icons/ai";
import Form from './Form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function User(props) {
    let [edit , setEdit] = useState(false);
    const dispatch = useDispatch(); 

  return (
    <div className="block-user-property" style={{flexDirection: edit ? 'column-reverse' : 'row'}}>
        {edit && <Form users={props.users} user={props.user} addUser={props.editUser}/>}
        <div style={{display: edit ? 'grid' : 'inline' , gridTemplateColumns: edit && 'repeat(4 , 2fr)' , padding: '1%'}}>
            <div>
                Id: {props.user.id + 1} 
            </div>
            <div>
                Name: {props.user.name}
            </div>
            <div>
                Surname: {props.user.surname}
            </div>
            <div>
                Age: {props.user.age}
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
            <Link id='edit-button' to={`/advanced/${props.user.id + 1}/${props.user.name}/${props.user.surname}/${props.user.age}/${props.user.toDrink}/${props.user.additionalInfo}`}>
                <AiOutlineCaretRight style={{color: '#17b0d0'}} />
            </Link>
        </div>
    </div>
  )
}
