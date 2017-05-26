import React from 'react';
import TODO from './TODO'
import { Provider } from 'react-redux'
import store from './redux/store'
class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div>
          <TODO />
        </div>
      </Provider>
    )
  }
}

export default App
