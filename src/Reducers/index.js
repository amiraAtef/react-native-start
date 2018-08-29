import {combineReducers} from 'redux'
// import { reducer as formReducer } from 'redux-form'
import appReducer from './CalenderReducer.js';

export default combineReducers({
    // form: formReducer,
    app:appReducer,

})