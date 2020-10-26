import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import peopleReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

//const middlewares = [thunkMiddleware];
const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const enhancers = [middlewareEnhancer];

export default createStore(peopleReducer, composeWithDevTools(...enhancers));
