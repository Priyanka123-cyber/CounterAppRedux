import { legacy_createStore } from "redux";//{legacy_createStore as createStore}- then can call the function by another name
import counterReducer from "./reducer"

const store=legacy_createStore()//before redux 5 it was createStore()


export default store