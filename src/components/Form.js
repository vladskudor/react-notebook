import React, { useRef, useState , useEffect } from "react";
import {AiOutlineUserAdd} from 'react-icons/ai'
import './style.css';
import { useDispatch } from "react-redux";

export default function Form(props){
    let ref = useRef();
    let userAdd = {};
    let myForm;
    let [name , setName] = useState('');
    let [surname , setSurName] = useState('');
    let [age , setAge] = useState(0);
    let [toDrink , setToDrink] = useState(false);
    let [id , setId] = useState(props.users.length);
    let [additionalInfo , setAdditionalInfo] = useState('');

    const dispatch = useDispatch(); 

    useEffect(() => {
        if(ref.current.value === 'julia') {
            alert('Acces blocked!!!');
            ref.current.style.background = 'red';
        }else{
            ref.current.style.background = '#80800';
        }
    })

    return (
        <form ref={(el) => myForm = el}>
            <label htmlFor="name">
                Edit name: 
                <input type="text" ref={ref} onChange={(e) => setName(e.target.value)} placeholder='enter name' id='name'/>
            </label>
            <label htmlFor="surname">
                Edit surname: 
                <input type="text" onChange={(e) => setSurName(e.target.value)} placeholder='enter surname' id='surname'/>
            </label>
            <label htmlFor="age">
                Edit age: 
                <input type="number" onChange={(e) => setAge(e.target.value)}  placeholder='enter age' id='age' />
            </label>
            <label htmlFor="toDrink">
                Drink: 
                <input type="checkbox" onChange={(e) => setToDrink(e.target.checked)}  placeholder='enter to drink' id='toDrink' />
            </label>
            <AiOutlineUserAdd id='button-add-user' onClick={() => {
                    myForm.reset();
                    setId(id + 1);
                    userAdd = {
                        name: name,
                        surname: surname,
                        age: age,
                        toDrink: toDrink,
                        id: id,
                        additionalInfo: 'info'
                    }
                    if(props.user){
                        userAdd.id = props.user.id;
                        dispatch({type: 'UPD_DATA' , payload: userAdd})
                    }else{
                        props.addUser(userAdd);
                        dispatch({type: 'ADD_DATA' , payload: userAdd})
                    }
            }} />
        </form>
    )

}

