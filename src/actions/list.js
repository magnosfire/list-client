import api from "../api";
import { LISTS_FETCHED } from '../types';

export const listsFetched = lists => (
    {
    type: LISTS_FETCHED,
    lists
});

export const fetchLists = data => dispatch =>
    api.lists.fetchAll().then(lists => {
        dispatch(listsFetched(lists));
    });

export const newItemList = data => dispatch => {
    console.log('aaaaaaa');
}
    