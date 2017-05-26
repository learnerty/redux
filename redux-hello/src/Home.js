import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import PostBody from './PostBody'


class Home extends React.Component{
  render(){
    let posts = this.props.posts
    let postArr = Object.keys(posts)
    let postList = postArr.map(item=>{
      return (
        <Link to={`post/${item}`} style={{textDecoration:'none',color:'#000'}} key={Math.random()}>
          <PostBody id={item}/>
        </Link>
      )
    })
    return (
      <div style={{height:'100vh',background:'rgb(0, 188, 212)'}} className="clearfix">
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts
  }
)

export default connect(mapStateToProps)(Home)
