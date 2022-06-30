import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      reverse: "",
      individuals: {},
      testCases: [
        {
          "input": "hello",
          "reverse": "olleh",
          "individuals": {
          "h": 1,
          "e": 1,
          "l": 2,
          "o": 1
          }
          }
      ]
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleClear = this.handleClear.bind(this);
  }
  handleInput(event) {
    this.setState({
      input: event.target.value
    })
    var diction = {}
    for (var i = 0; i < event.target.value.length; ++i) {
      if (event.target.value[i].toUpperCase() === event.target.value[i].toLowerCase()) {
        continue;
      }
      if (!diction[event.target.value[i]]) {
        diction[event.target.value[i]] = 1;
      }
      else {
        diction[event.target.value[i]]++;
      }
    }
    this.setState({
      individuals: diction
    })
    var splitInput = event.target.value.split("");
    var rev = splitInput.reverse();
    var word = Buffer.from(event.target.value + ':').toString('base64')
    
    if (event.target.value.length == 32) {
    this.setState({
      reverse: word
    })}

    if (event.target.value.length == 0) {
      this.setState({
        reverse: ''
      })}

    if (event.target.value.length != 32 && event.target.value.length != 0) {
        this.setState({
          reverse: 'Wrong Key'
        })}

  }

  handleSubmit(event) {
    let i = this.state.input;
    let r = this.state.reverse;
    let ind = this.state.individuals;
    this.state.testCases.unshift({input: i, reverse: r, individuals: ind})
    this.setState({
      input: "",
      reverse: "",
      individuals: {}
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Nanonets RapidApi Keygen</h1>
        <hr></hr>
        <br></br>
        <label htmlFor="input"><b>Enter Nanonets API Key :</b></label>
        <br></br>
        <input id="input" type="text" value = {this.state.input} onChange={this.handleInput} placeholder="Enter API Key!"/>
        
        <p><b>Nanonets RapidApi Key:</b> </p>
        {this.state.reverse}
        
        
        
        
      </div>
    );
  }
}

export default App;

//<button onClick={this.handleClear}>Clear all entries!</button> <p><b>Nanonets RapidApi Key:</b> {this.state.reverse}</p>