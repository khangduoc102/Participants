import React, { Component } from 'react';
import logo from './logo.svg';

import Participants from './components/Participants';
import AddParticipant from './components/AddParticipant';
import Participant from './components/utils/Participant';

import './App.css';

class App extends Component {
  state = {
    participants: [
    ]
  }

  //Happened when first load the component
  componentDidMount = () => {
    try {
      const json = localStorage.getItem('participants');
      const participants = JSON.parse(json);

      if(participants){
          this.setState(() => ({participants}));
      }
      else {
        this.setState(() => {
          return (
            {
              participants: [
                {"id":1,"full_name":"Kirk Wasmer","email":"kwasmer0@europa.eu","phone":"288 998 7762"},
                {"id":2,"full_name":"Russell Escale","email":"rescale1@npr.org","phone":"773 576 9422"},
                {"id":3,"full_name":"Barbie O'Donoghue","email":"bodonoghue2@livejournal.com","phone":"237 930 6269"},
                {"id":4,"full_name":"Vachel Waliszewski","email":"vwaliszewski3@wufoo.com","phone":"934 827 1289"},
                {"id":5,"full_name":"Michel Morcom","email":"mmorcom4@alexa.com","phone":"503 100 3823"},
                {"id":6,"full_name":"Briana McGorman","email":"bmcgorman5@nationalgeographic.com","phone":"104 189 7110"},
                {"id":7,"full_name":"Dotty Klimowicz","email":"dklimowicz6@google.co.jp","phone":"202 649 5452"},
                {"id":8,"full_name":"Uri Sommerville","email":"usommerville7@upenn.edu","phone":"706 665 0237"},
                {"id":9,"full_name":"Jobi Twelvetrees","email":"jtwelvetrees8@engadget.com","phone":"172 481 0204"},
                {"id":10,"full_name":"Debee Kassman","email":"dkassman9@dropbox.com","phone":"610 629 6465"},
                {"id":11,"full_name":"Ambros Larrosa","email":"alarrosaa@tinyurl.com","phone":"857 681 9579"},
                {"id":12,"full_name":"Oates Basso","email":"obassob@addthis.com","phone":"127 425 2335"},
                {"id":13,"full_name":"Laurice Maud","email":"lmaudc@google.es","phone":"221 548 9182"},
                {"id":14,"full_name":"Georgie Garric","email":"ggarricd@qq.com","phone":"346 307 6801"},
                {"id":15,"full_name":"Heather Lannen","email":"hlannene@creativecommons.org","phone":"388 710 2265"},
                {"id":16,"full_name":"Lanny Kinson","email":"lkinsonf@constantcontact.com","phone":"765 253 3897"},
                {"id":17,"full_name":"Leeann Arnaldo","email":"larnaldog@g.co","phone":"733 753 9936"},
                {"id":18,"full_name":"Betsy Champerlen","email":"bchamperlenh@shinystat.com","phone":"308 641 9349"},
                {"id":19,"full_name":"Eugenie Runge","email":"erungei@a8.net","phone":"369 748 7128"},
                {"id":20,"full_name":"Nancy Josephsen","email":"njosephsenj@redcross.org","phone":"911 246 0871"}
              ]
            }
          )
        })
      }       
    } catch(e) {
      // do nothing
    }
  }

  //Component did update? Yes? Saved state for next time loading
  componentDidUpdate= (prevProps, prevState) => {
    if(prevState.participants.length !== this.state.participants.length){
        const json= JSON.stringify(this.state.participants);
        localStorage.setItem('participants', json);
    }
  }

  //Add new participant
  handleAddParticipant = (participant) => {
    if(participant.full_name==='' || participant.email==='' || participant.phone===''){
      return "Values must not be empty!";
    }
    else{
      this.setState((prevState) => ({participants: prevState.participants.concat([participant])}));
    }
  }

  //Delete a participant
  handleDeleteParticipant = (id) => {
    this.setState((prevState) => ({participants: prevState.participants.filter((participant) => participant.id!==id)}));
  }

  //Sort oreder participants by alphabet
  handleSortParticipants = () => {
    this.setState((prevState) => ({participants: prevState.participants.sort((a, b)=> ((a.full_name.toUpperCase() > b.full_name.toUpperCase()) ? 1 : (a.full_name.toUpperCase() < b.full_name.toUpperCase()) ? -1 : 0))}))
  }

  //Modify a specific participant
  handleEditParticipant = (id, name, email, phone) => {
    let newParticipants = this.state.participants;
    let participant = new Participant(id, name, email, phone);
    
    newParticipants[newParticipants.indexOf(newParticipants.filter((participant) => participant.id===id)[0])] = participant;
    
    this.setState((prevState) => ({participants: newParticipants}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />     
          <div className="name">Nord Software</div>
        </header>
        <div className="App-body">
          <div className="app-name">
            List of participants
          </div>
          <AddParticipant 
            handleAddParticipant={this.handleAddParticipant}
            data={this.state}
          />
          <Participants 
            data={this.state}
            handleSortParticipants={this.handleSortParticipants}
            handleDeleteParticipant={this.handleDeleteParticipant}
            handleEditParticipant={this.handleEditParticipant}
           />
        </div>
      </div>
    );
  }
}

export default App;
