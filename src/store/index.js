import {createStore , combineReducers} from 'redux';
import {DataReduser} from './Reduser';

const rootReduser = combineReducers({
    users: DataReduser
})


export const store = createStore(rootReduser);