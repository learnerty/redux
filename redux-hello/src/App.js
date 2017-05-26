import React from 'react'
import Home from './Home'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Post from './Post'

const NoMatch = () => {
  return <h1>404</h1>
}
class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Link to="/" style={{textDecoration:'none',position:'absolute',margin:'20px 0 0 20px',fontSize:'34px',fontWeight:'bold',color:'#fff'}}>首页</Link>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/post/:id" component={Post}/>
                <Route component={NoMatch}/>
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
