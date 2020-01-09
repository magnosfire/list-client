import { combineReducers } from 'redux';

import user from './reducers/user';
import groups from './reducers/groups';
import lists from './reducers/lists'

export default combineReducers({
    user,
    groups,
    lists
})