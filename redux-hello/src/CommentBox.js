import React from 'react';
import store from './redux/store.js'
import { connect } from 'react-redux'

class CommentBox extends React.Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    const content = this.textInput.value.trim()
    store.dispatch({type:'ADD_COMMENT', comment:content})
    this.refs.commentForm.reset()
  }

  render(){
    return (
      <div className="down">
        <div className="comment-box">
          {
            this.props.comments.map(item=><div className="comment" key={Math.random()}>{item}</div>)
          }
          <form className="comment-form" onSubmit={this.handleSubmit} ref="commentForm">
            <input type="text" className="input" ref={value=>this.textInput=value} />
            <button type="submit" className="submit-btn">提交</button>
          </form>
          <div className="underline"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    comments:state
  }
)
export default connect(mapStateToProps)(CommentBox)
