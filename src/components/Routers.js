import React from 'react';
import Main from './Main';
import Info from './Info';

import {
    Route,
    Routes,
} from 'react-router-dom';

export default class Routers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: props.users
        }
    }
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={ <Main users={this.state.users}/>}></Route>
                    <Route path="/advanced/:id/:name/:surname/:age/:toDrink/:additionalInfo" element={ <Info users={this.state.users}/>}></Route>
                </Routes>
            </div>
        )
    }
}
