import { combineReducers } from 'redux'

let judgeCompletes = {
  complete:0
}
function allRememberReducer(state = [], action){
  switch(action.type){
    case 'ADD_TASK' :
      return [...state,action.tack]
    case 'DISPLAY_ALL' :
    console.log([...state]);
      return [...state]
    case 'SWITCH_STATE' :
      let newstate = state.map(item=>item.id===action.id ? {...item,condition:!item.condition} : item)
     return newstate
    default :
      return state
  }
}
function completeReducer(state = [], action){
  switch (action.type) {
    case 'FILTER_TASk':
      return [...action.complete]
    default:
      return state
  }
}
function judgeCompletesReducer(state = judgeCompletes, action){
  switch (action.type) {
    case 'JUDGE_COMPLETES':
      return {complete:action.state}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  Allremember:allRememberReducer,
  complete:completeReducer,
  judge:judgeCompletesReducer
})

export default rootReducer
