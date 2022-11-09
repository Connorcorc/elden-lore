import React, { Component } from 'react'
// import fetchCall from './src/api-calls.js'
import LandingPage from '../LandingPage/LandingPage'
import MainPage from '../MainPage/MainPage'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      eldenRingData: [],
      random: {}
    }
  }

componentDidMount = () => {
  fetch(`https://eldenring.fanapis.com/api/creatures?limit=3`)
    .then(response => response.json())
    .then(data => this.setState({eldenRingData: data.data}))

}


// <MainPage eldenRingData={this.state.eldenRingData}/>
  render() {
    console.log(this.state)
    return (
      <main className="mainPage">
      <MainPage eldenRingData={this.state.eldenRingData}/>

      </main>
    )
  }
}
export default App;
