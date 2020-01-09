import { createSelector } from 'reselect';
import { LISTS_FETCHED } from '../types';

export default function lists(state = {}, action = {}) {

    switch(action.type) {
        case LISTS_FETCHED:
            return {
                ...state,
                lists: action.lists
            };
        default:
            return state;
    }
}
