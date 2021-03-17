import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  constructor() {
    super() 
   this.state = {
     time: new Date().toLocaleTimeString()
   }
  }
  componentDidMount() {
    this.intervalID = setInterval(() => 
    this.updateClock(),1000
    )
  }
  // componentWillUnmount() {
  //   clearInterval(this.intervalID)
  // }
  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }
  render() {
    const {time} = this.state
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container center title">
            {time}
          </div>
        </div>
      </section>
    )
  }
}
