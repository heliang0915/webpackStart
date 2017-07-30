import React,{Component} from 'react';
import {render}  from 'react-dom';
import {combineReducers} from 'redux';
import {Router}  from 'react-router';
import {Provider} from 'react-redux';
import   'isomorphic-fetch'

class App extends Component{
    state={
        len:0
    }
  constructor(props){
      super(props)
  }
  componentDidMount(){
      fetch('https://api.github.com/users').then((res)=>res.json()).then((json)=>{
          this.setState({
              len:json.length
          })
      })
  }
  render(){
      return(
          <div>
              Hello React {this.state.len}
          </div>
      )
  }
  say(){
       console.log(this.name);
  }
}
render(<App />,document.querySelector('#app'))
