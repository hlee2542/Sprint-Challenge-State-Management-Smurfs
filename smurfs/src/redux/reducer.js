import {ERROR, LOADING, RECEIVED} from './constants';

const initialState = {
    loading: false,
    error: false,
    members: []
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR:
            return {loading: false, error: true, members: []};
        case LOADING:
            return {loading: true, error: false, members: []};
        case RECEIVED:
            return {loading: false, error: false, members: action.members}
        default:
            return state;
    }
};