import {createStore , combineReducers} from 'redux';
import {dataReduser} from './Reduser';

const rootReduser = combineReducers({
    users: dataReduser
})


export const store = createStore(rootReduser);