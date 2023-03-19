import React , { useState }  from "react";

export const DataReduser = (state = {
    users: JSON.parse(localStorage.getItem('usersRedux')) || []
} , action) => {
    let allUsers = state.users;
    let currentUser;
    state.users = JSON.parse(localStorage.getItem('usersRedux')) || [];    

    switch(action.type){
        case 'ADD_DATA':       
            state.users.push(action.payload);
            localStorage.setItem('usersRedux' , JSON.stringify(state.users));
            return {...state , users:  state.users + action.payload};
        case 'DEL_DATA':
            allUsers[action.payload.id] = action.payload;
            state.users = state.users.filter((user) => user.id !== allUsers[action.payload.id]);
            localStorage.setItem('usersRedux' , JSON.stringify(state.users.filter((user) => user.id !== allUsers[action.payload.id])));
            return {...state , users:  state.users - action.payload};
        case 'UPD_DATA':
            for(let user = 0;user < allUsers.length;user++){
                if(allUsers[user].id === action.payload.id){
                    allUsers[user] = action.payload;
                    currentUser = allUsers[user];
                    state.users = allUsers;
                    localStorage.setItem('usersRedux' , JSON.stringify(allUsers));
                }
            }
            return {...state , users: state.users[currentUser]};
        case 'ADD_INFO_TO_USER': 
            for(let user = 0;user < allUsers.length;user++){
                if(allUsers[user].id === action.payload.id){
                    allUsers[user] = action.payload;
                    currentUser = allUsers[user];
                    localStorage.setItem('usersRedux' , JSON.stringify(allUsers));
                }
            }
            return {...state , users: state.users[currentUser]};
        default:
            return state
    }
}