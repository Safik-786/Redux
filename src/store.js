import rootReducer from "./reducers";
import {createStore} from 'redux'

const store= createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// the second parameter is for the redux devtool extensions


export default store