export const dataReduser = (state = {
    users: JSON.parse(localStorage.getItem('usersRedux')) || []
} , action) => {
    let allUsers = state.users;
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
            for(let user = 0;user < state.users.length;user++){
                if(state.users[user].id === action.payload.id){
                    state.users[user] = action.payload;
                    localStorage.setItem('usersRedux' , JSON.stringify(state.users));
                }
            }
            return {...state};
        case 'ADD_INFO_TO_USER': 
            for(let user = 0;user < state.users.length;user++){
                if(state.users[user].id === action.payload.id){
                    state.users[user] = action.payload;
                    localStorage.setItem('usersRedux' , JSON.stringify(state.users));
                }
            }
        default:
            return state
    }
}
