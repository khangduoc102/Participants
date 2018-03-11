import React from 'react';

import Participant from './utils/Participant'

export default class AddParticipant extends React.Component {
    state = {
        error: undefined
    }
    handleAddParticipant= (e) => {
        e.preventDefault();
        
        const name = e.target.elements.namn.value.trim();
        const email = e.target.elements.email.value.trim();
        const phone = e.target.elements.fon.value.trim();

        let participant = new Participant(this.props.data.participants.length+1, name, email, phone);

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