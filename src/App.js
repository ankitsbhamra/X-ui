import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    };
    this.handleUsernameChnage.bind(this);
    this.handlePasswordChange.bind(this);
  }

  handleUsernameChnage(e){
    this.setState({username:e.target.value});
  }

  handlePasswordChange(e){
    this.setState({password:e.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <input type = "text" className="inputBox" placeholder="Username" maxlength="10" onchange={this.handleUsernameChange}/>

          <input type="password" className="inputBox" placeholder="Password" onchange={this.handlePasswordChange}/>
          <div style={{display:'flex'}}>
          <input type="button" className="inputBox" value="Log In" style={{margin:'2%'}}/> 
          <input type="button" className="inputBox" value="Sign Up" style={{margin:'2%'}}/> 
          </div>
        </header>
      </div>
    );
  }
}

export default App;
