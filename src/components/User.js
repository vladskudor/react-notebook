import React, { useState } from 'react';
import { AiOutlineClose , AiOutlineEdit , AiOutlineCaretRight} from "react-icons/ai";
import Form from './Form';
import { Link } from 'react-router-dom';

export default function User(props) {
    let [edit , setEdit] = useState(false);
  return (
    <div className="block-user-property" style={{flexDirection: edit ? 'column-reverse' : 'row'}}>
        {edit && <Form users={props.users} user={props.user} addUser={props.editUser}/>}
        <div>
            <div>
                Id: {props.user.id}
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
            <AiOutlineClose onClick={() => {
                    props.deleteUser(props.user.id)
                }
            }/>
            <AiOutlineEdit onClick={() => {
                    setEdit(!edit);
                } 
            }/>
        </div>
        <div style={{position: 'absolute' , bottom: 0, right: 0}}>
            <Link to={`/advanced/${props.user.id}/${props.user.name}/${props.user.surname}/${props.user.age}/${props.user.toDrink}/${props.user.additionalInfo}`} style={{
                textDecoration: 'none',
                fontSize: '22px',
                background: '#808080',
                color: '#000',
                borderRadius: '10px',
                padding: '0 10px' ,
                textTransform: 'uppercase',
                fontWeight: 600
            }}>
                <AiOutlineCaretRight />
            </Link>
        </div>
    </div>
  )
}
