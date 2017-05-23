import React from 'react';
import store from './redux/store.js'
import { connect } from 'react-redux'

class PostBody extends React.Component{
  render(){
    return (
      <div>
        <div className="post-body">
          <div className="comment-num">
            {this.props.comment.length}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    comment:state
  }
)

export default connect(mapStateToProps)(PostBody)
