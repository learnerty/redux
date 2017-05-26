import { combineReducers } from 'redux'

// let comments = ['hello1','hello2']

let comments = {
  1 : ['hello1','hello2'],
  2 : ['hello3','hello4']
}

function commentsReducer(state = comments, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {...state,[action.postId]:[...state[action.postId],action.comment]}
    default:
      return state
  }
}

const posts = {
  1:  { title: 'redux-hello', likes: 3 },
  2:  { title: 'redux-baby', likes: 6 }
}

// function likeReducer(state = likes, action) {
//   switch(action.type){
//     case 'INCREMENT_LIKE' :
//       return state + 1
//     default:
//       return state
//   }
// }

function postReducer(state = posts, action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      return {...state,[action.postId]: {...state[action.postId], likes: state[action.postId].likes+1}}
    default:
      return state;
    }
  }

const rootReducer = combineReducers({
  comments:commentsReducer,
  // likes:likeReducer,
  posts:postReducer
})

export default rootReducer
