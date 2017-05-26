import React from 'react';
import { connect } from 'react-redux'
import store from './redux/store.js'

import { withRouter } from 'react-router-dom'
class PostBody extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    store.dispatch({type:'INCREMENT_LIKES',postId:this.props.id})
  }
  render(){
    return (
      <div>
        <div className="post-body">
          <p style={{paddingLeft:'20px'}}>{this.props.posts[this.props.id].title}</p>
          <div className="likes-num num" onClick={this.handleClick}>
            {this.props.posts[this.props.id].likes} 赞
          </div>
          <div className="comment-num num">
            {this.props.comments[this.props.id].length} 评论
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    comments:state.comments,
    posts: state.posts
    // likes:state.likes
  }
)

export default withRouter(connect(mapStateToProps)(PostBody))
