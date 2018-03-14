import React from 'react';

import Participant from './utils/Participant'

export default class AddParticipant extends React.Component {
    state = {
        error: undefined
    }

    handleAddParticipant= (e) => {
        //Prevent from moving to another page
        e.preventDefault();
        
        var participant= {};

        const name = e.target.elements.namn.value.trim();
        const email = e.target.elements.email.value.trim();
        const phone = e.target.elements.fon.value.trim();

        if(this.props.data.participants.length===0) {
            participant = new Participant(1, name, email, phone);
        }
        else{
            //Find the biggest id to be the new ID
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
        <div className="add-participant">
                <form className="add-participant-form" onSubmit={this.handleAddParticipant}>
                    <table className="add-participant-form-table">
                        <tbody>
                            <tr>
                                <td className="add-participant-form-table-column" width="20%"><input  size="14" className="add-participant-form-table-column-input" type="text" name="namn" placeholder="Full name"/></td>
                                <td className="add-participant-form-table-column" width="35%"><input  size="30" className="add-participant-form-table-column-input" type="text" name="email" placeholder="Email address"/></td>
                                <td className="add-participant-form-table-column" width="25%"><input  size="18" className="add-participant-form-table-column-input" type="text" name="fon" placeholder="Phone"/></td>
                                <td className="add-participant-form-table-column-button" width="20%">
                                    <button className="add-button">Add new</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>      
                {this.state.error && <div className="add-participant-error">{this.state.error}</div>}        
        </div>    
        );
    }
}