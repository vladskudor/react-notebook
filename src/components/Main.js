import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import Form from './Form';
import './style.css'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
        users: this.props.users,
        media: window.matchMedia(`(max-width: 768px)`),
        menu: false
    }

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.stateMenu = this.stateMenu.bind(this);
  }  

  componentDidMount(){
    if(this.state.media.matches){
      this.setState({menu: false})
    }
    if(!this.state.media.matches){
      this.setState({menu: true})
    }
  }

  componentDidUpdate(p){
    console.log(p);
  }

  render() {
    return (
      <div>
        <Header stateMenu={this.stateMenu} menu={this.state.media.menu} media={this.state.media}/>
        <div className='block-users'>
            <main>
                {this.state.users.map((user, index) => {
                    return(
                      <div key={index} className="block-user">
                          <User users={this.state.users} user={user} deleteUser={this.deleteUser} editUser={this.editUser} />
                      </div>
                    )
                  })
                }
            </main>
            <aside>
                {this.state.menu && <Form users={this.state.users} addUser={this.addUser}/>}
            </aside>
        </div>
      </div>
    )
  }

  addUser(u){
    this.setState({users: [...this.state.users , u]})
    localStorage.setItem('users' , JSON.stringify(this.state.users));
  }

  deleteUser(u){
    let allUsers = this.state.users;
    allUsers[u.id + 1] = u;
    console.log(u.id)
    this.setState({
      users: this.state.users.splice(u , 1)
    })
    localStorage.setItem('users' , JSON.stringify(this.state.users));
  }

  editUser(u){
    let allUsers = this.state.users;
    allUsers[u.id] = u;
    this.setState({ users: [] } , () => {
      this.setState({users: [...allUsers]})
    })
    localStorage.setItem('users' , JSON.stringify(this.state.users));
  }

  stateMenu(){
    this.setState({menu: !this.state.menu})
  }
}
