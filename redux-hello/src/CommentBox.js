import React from 'react';
import store from './redux/store.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
class CommentBox extends React.Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    const content = this.textInput.value.trim()
    if(content){
      store.dispatch({type:'ADD_COMMENT', comment:content, postId:this.props.match.params.id})
      this.refs.commentForm.reset()
    }
  }

  render(){
    return (
      <div className="down">
        <div className="comment-box">
          {
            this.props.comments[this.props.id].map(item=><div className="comment" key={Math.random()}>{item}</div>)
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
    comments:state.comments
  }
)
export default withRouter(connect(mapStateToProps)(CommentBox))
