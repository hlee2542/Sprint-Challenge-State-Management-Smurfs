import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {mainReducer} from './redux/reducer';
import {fetchSmurfs, postSmurfs} from './redux/action-creators';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(mainReducer, applyMiddleware(thunk));
const mapStateToProps = state => ({
    members: state.members,
    loading: state.loading,
    error: state.error
});
const mapDispatchToProps = dispatch => ({
    fetchSmurfs: () => dispatch(fetchSmurfs()),
    postSmurfs: (data) => dispatch(postSmurfs(data))
});
const Container = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(<Provider store={store}><Container /></Provider>, document.getElementById("root"));
