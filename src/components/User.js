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
        <div style={{width: edit && '30%' , padding: edit && '10px 0'}}>
            <div>
                Id:
            </div>
            <div>
                Name:
            </div>
            <div>
                Surname:
            </div>
            <div>
                Age:
            </div>  
            <div>
                Tel:
            </div> 
            <div>
                Email:
            </div> 
        </div>
        <div>
            <div>
                {props.user.id}
            </div>
            <div>
                {props.user.name}
            </div>
            <div>
                {props.user.surname}
            </div>
            <div>
                {props.user.age}
            </div>  
            <div>
                {props.user.tel}
            </div> 
            <div>
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
