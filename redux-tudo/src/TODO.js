import React from 'react';
import { connect } from 'react-redux'
import store from './redux/store.js'
class TODO extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClickNot = this.handleClickNot.bind(this)
  }
  handleClick(){
    let complete = this.props.Allremember.filter(item=>item.condition)
    store.dispatch({
      type:'FILTER_TASk',
      complete:complete
    })
    store.dispatch({
      type:'JUDGE_COMPLETES',
      state:1
    })
  }
  handleClickNot(){
      let complete = this.props.Allremember.filter(item=>!item.condition)
      store.dispatch({
        type:'FILTER_TASk',
        complete:complete
      })
      store.dispatch({
        type:'JUDGE_COMPLETES',
        state:2
      })
  }
  handleSubmit(e){
    e.preventDefault()
    const tack = {
      title:this.textInput.value.trim(),
      condition: false,
      id:Date.now()
    }
    if(tack.title){
      store.dispatch({type:'ADD_TASK', tack:tack})
    }
    this.refs.contentForm.reset()
  }
  render(){
    let appSty = {
      background:'#fff',
      width:'300px',
      padding:'0 40px',
      margin:'60px auto 0'
    }
    let liSty = {
      listStyle:'none',
      lineHeight:'40px',
      padding:'0 30px'
    }
    let completeSty = {
      textDecoration: 'line-through',
      color:'#ccc'
    }
    let arr = this.props.judge.complete===0?this.props.Allremember:this.props.complete
    return (
      <div style={appSty} className="clearfix">
        <h2 style={{textAlign:'center',lineHeight:'100px'}}>TODO</h2>
        <ul>
          {
            arr.map(item=>{
              return (
                <li style={item.condition ? {...liSty,...completeSty} : liSty} key={Math.random()}>
                  <p id={item.id} onClick={(e)=>{
                    return (
                      store.dispatch({
                        type:'SWITCH_STATE',
                        id:item.id
                      })
                    )
                  }}>
                  {item.title}
                  {
                    item.condition?<i className="iconfont" style={{color:'green',float:'right'}}>&#xe666;</i>:null
                  }
                </p>
                </li>
              )
            })
          }
        </ul>
        <form onSubmit={this.handleSubmit} ref="contentForm" style={{textAlign:'center',marginBottom:'10px'}}>
          <input type="text" ref={value=>this.textInput=value} />
          <button style={{border:'none',outline:'none',background:'#fff'}}><i className="iconfont" style={{color:'#41b341',fontSize:'40px'}}>&#xe897;</i></button>
        </form>
        <div style={{width:'33.333%',float:'left',textAlign:'center'}}>
          <button onClick={()=>store.dispatch({type:'JUDGE_COMPLETES',state:0})} style={{border:'none',outline:'none',background:'#fff',color:'#295bc1'}}><p><i className="iconfont" style={{fontSize:'30px'}}>&#xe63b;</i></p><p>All</p></button>
        </div>
        <div style={{width:'33.333%',float:'left',textAlign:'center'}}>
          <button style={{border:'none',outline:'none',background:'#fff',color:'#a02794'}} onClick={this.handleClick}><p><i className="iconfont" style={{fontSize:'30px'}}>&#xe666;</i></p><p>完成</p></button>
        </div>
        <div style={{width:'33.333%',float:'left',textAlign:'center'}}>
          <button style={{border:'none',outline:'none',background:'#fff',color:'#a02794'}} onClick={this.handleClickNot}><p><i className="iconfont" style={{fontSize:'30px'}}>&#xe63d;</i></p><p>未完成</p></button>
        </div>
      </div>
    )
  }
}

const mapStateToPorps = (state)=>({
  Allremember:state.Allremember,
  complete:state.complete,
  judge:state.judge
})

export default connect(mapStateToPorps)(TODO)
