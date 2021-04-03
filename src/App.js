import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import {useState, useReducer } from "react";
import Header from './Header'
import Button from './Buutton';

const images = {
  count: 0,
  user:'hahah'
}
function App() {
  const reducer = (state, action)=>{
    console.log(state)
    console.log(state);
    switch (action.type) {
      case 'increment':
        return  {...state,count:state.count+1}
        break;
    case 'decrement':
      return{count:state.count-1}
      default:
        return state
        break;
    }
    
  }
  
 const [state,dispatch] = useReducer(reducer ,images )
  return (
    <div className='App'>
      {state.count}
      <Header />
      <Button onClick={()=> dispatch({type:"decrement"})}>Button1</Button>
      <Button primary onClick={()=> dispatch({type:"increment"})}>Button3</Button>
    </div>
  )
}

export default App;
