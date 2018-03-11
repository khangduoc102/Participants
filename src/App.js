import React, { Component } from 'react';
import logo from './logo.svg';

import Participants from './components/Participants';
import AddParticipant from './components/AddParticipant';


import './App.css';

class App extends Component {
  state = {
    participants: [
      {
        id: 1,
        full_name: "Kirk Wasmer",
        email: "kwasmer0@europa.eu",
        phone: "288 998 7762"
      },
      {"id": 2, "full_name":"Russell Escale","email":"rescale1@npr.org","phone":"773 576 9422"}
    ]
  }

  handleAddParticipant = (participant) => {
    if(participant.full_name==='' || participant.email==='' || participant.phone===''){
      return "Values must not be empty!";
    }
    else{
      this.setState((prevState) => ({participants: prevState.participants.concat([participant])}));
    }
  }

  handleDeleteParticipant = (id) => {
    this.setState((prevState) => ({participants: prevState.participants.filter((participant) => participant.id!==id)}));
  }

  render() {
    return (
      <div>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Nord Software</h2>
        </header>
        <div>
          <h3>List of participants</h3>
          <AddParticipant 
            handleAddParticipant={this.handleAddParticipant}
            data={this.state}
          />
          <Participants 
            data={this.state}
            handleDeleteParticipant={this.handleDeleteParticipant}
           />
        </div>
      </div>
    );
  }
}

export default App;
