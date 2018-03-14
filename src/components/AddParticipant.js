import React from 'react';

import Participant from './utils/Participant'

export default class AddParticipant extends React.Component {
    state = {
        error: undefined
    }
    handleAddParticipant= (e) => {
        e.preventDefault();
        
        var participant= {};

        const name = e.target.elements.namn.value.trim();
        const email = e.target.elements.email.value.trim();
        const phone = e.target.elements.fon.value.trim();

        if(this.props.data.participants.length===0) {
            participant = new Participant(1, name, email, phone);
        }
        else{
            //Find the biggest id
            let ids = [];
            let maxId= 0;
            
            this.props.data.participants.forEach((participant) => {ids.push(participant.id)});
            maxId = ids.reduce((a,b) => Math.max(a,b));

            participant = new Participant(maxId + 1, name, email, phone);
        }


        const error = this.props.handleAddParticipant(participant);
        
        this.setState(() => ({error}));
        
        //Reset the input field if success
        if(!error) {
            e.target.elements.namn.value = '';
            e.target.elements.email.value = '';
            e.target.elements.fon.value = '';
        }
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleAddParticipant}>
                <table border="1" width="600">
                    <tbody>
                        <tr><td width="150">Name: <input type="text" name="namn"/></td><td width="150">Email: <input type="text" name="email"/></td><td width="150">Phone: <input type="text" name="fon"/></td><td width="150"><button>Add</button></td></tr>
                    </tbody>
                </table>
            </form>
            {this.state.error && <p>{this.state.error}</p>}
        </div>    
        );
    }
}