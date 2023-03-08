import React, { Component } from 'react';
import {AiOutlineUserAdd} from 'react-icons/ai'
import './style.css';

export default class Form extends Component {
    userAdd = {};
    constructor(props){
        super(props)
        this.state = {
            name: '',
            surname: '',
            age: 0,
            toDrink: false,
            id: this.props.users.length,
            additionalInfo: ''
        }
    }
    
  render() {
    return (
        <form ref={(el) => this.myForm = el}>
            <label htmlFor="name">
                Edit name: 
                <input type="text" onChange={(e) => this.setState({name: e.target.value})} placeholder='enter name' id='name'/>
            </label>
            <label htmlFor="surname">
                Edit surname: 
                <input type="text" onChange={(e) => this.setState({surname: e.target.value})} placeholder='enter surname' id='surname'/>
            </label>
            <label htmlFor="age">
                Edit age: 
                <input type="number" onChange={(e) => this.setState({age: e.target.value})}  placeholder='enter age' id='age' />
            </label>
            <label htmlFor="toDrink">
                Drink: 
                <input type="checkbox" onChange={(e) => this.setState({toDrink: e.target.checked})}  placeholder='enter to drink' id='toDrink' />
            </label>
            <AiOutlineUserAdd id='button-add-user' onClick={() => {
                    this.myForm.reset();
                    this.setState({id: this.state.id + 1});
                    this.userAdd = {
                        name: this.state.name,
                        surname: this.state.surname,
                        age: this.state.age,
                        toDrink: this.state.toDrink,
                        id: this.state.id,
                        additionalInfo: 'info'
                    }
                    if(this.props.user){
                        this.userAdd.id = this.props.user.id;
                    }
                    this.props.addUser(this.userAdd);
            }} />
        </form>
    )
  }
}
