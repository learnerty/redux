import React from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import { Provider } from 'react-redux'
import store from './redux/store.js'
class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div>
          <div className="top clearfix">
            <PostBody />
          </div>
          <div className="bottom clearfix">
            <CommentBox/>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App
