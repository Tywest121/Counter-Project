import React, { Component } from 'react'
import Add from './components/Add'
import Subtract from './components/Subtract'
import SubmitNum from './components/SubmitNum'
import Reset from './components/Reset'
import './App.css';

class App extends Component{
  state ={
    count:0
  }
  countIncrease = () => {
    this.setState(
      {count: this.state.count + 1}
    )
  }
  countDecrease = () => {
    this.setState(
      {count: this.state.count - 1}
    )
  }
  SubmitNum = (number) =>{
    let value = parseInt(number)
    this.setState(
      {count: this.state.count + value}
    )
  }
  reset = () => {
    this.setState({
      count: 0
    })
}

  render(){
    return(
      <div className="App">
      <div className="flex-container">
      <div className="container">
        <p className='p'>This Is The Final Countdown:</p>
        <h4 className='free'>{this.state.count}</h4>
      </div>
      <div className="flex-container-two">
      <div className="container-two">
        <Add countIncrease={this.countIncrease} />
        <Subtract countDecrease={this.countDecrease} />
      </div>
      <div className="flex-container-three">
      <div className="container-three">
        <SubmitNum SubmitNum={this.SubmitNum} />
        <Reset reset={this.reset} />
      </div>
    </div>
    </div>
    </div>
    </div>
    )
  }
}

export default App;
