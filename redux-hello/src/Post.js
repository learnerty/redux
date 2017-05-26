import React from 'react';
import PostBody from './PostBody'
import CommentBox from './CommentBox'
class Post extends React.Component{
  render(){
    return (
      <div>
        <div className="top clearfix">
          <PostBody id={this.props.match.params.id}/>
        </div>
        <div className="bottom clearfix">
          <CommentBox id={this.props.match.params.id}/>
        </div>
      </div>
    )
  }
}
export default Post
