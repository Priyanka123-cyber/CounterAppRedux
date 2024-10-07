
//switch case is used so that multiple cases can be handled rather than being limited to two cases in if-else
import{INCREMENT,DECREMENT} from "./action"//importing from action.js
const counterReducer=(state=0,action)=>{  //in each switchcase state needs to be changed
  switch(action.type){
    case INCREMENT: return state+1
    case DECREMENT: return state-1
    default: return state
  }
}