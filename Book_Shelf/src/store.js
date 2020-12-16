import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {forbiddenStatusMiddleware,loggerMiddleware} from "./middleware/index"

export default function configureStore(initialState={}) {
 return createStore(
   rootReducer,
   initialState,
   applyMiddleware(thunk,forbiddenStatusMiddleware)
 );
}