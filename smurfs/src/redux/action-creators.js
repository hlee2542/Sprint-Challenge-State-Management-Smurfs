import {ERROR, LOADING, RECEIVED} from './constants';
import axios from 'axios';

export const loading = () => ({
    type: LOADING
});

export const error = () => ({
    type: ERROR
});

export const received = (members) => ({
    type: RECEIVED,
    members
});

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch(loading());
        fetch('http://localhost:3333/smurfs')
            .then(res => res.json(), err => dispatch(error()))
                .then(members => dispatch(received(members)));
    };
}

export const postSmurfs = data => {
    return dispatch => {
        dispatch(loading());
        axios.post('http://localhost:3333/smurfs', data)
            .then(res => dispatch(received(res.data)))
            .catch(() => dispatch(error()));
    };
}