import React from 'react';

import EditParticipant from './EditParticipant';

export default class Participant extends React.Component {
    state = {
        mode: false
    }

    handleToggle = () => {
        this.setState((prevState) => ({mode: !prevState.mode}))
    }

    render() {
        {
            if(this.state.mode){
                return (
                    <EditParticipant 
                    data={this.props}
                    handleToggle={this.handleToggle}
                    handleEditParticipant={this.props.handleEditParticipant}
                    />
                )
            }
            else{
                return ( <tr className="participant">
                    <td className="participant-column">{this.props.name}</td>
                    <td className="participant-column">{this.props.email}</td>
                    <td className="participant-column">{this.props.phone}</td>
                    <td className="participant-column">
                        <button onClick={this.handleToggle} className="participant-column-button"><i className="material-icons">mode_edit</i></button>
                        <button onClick={(e) => this.props.handleDeleteParticipant(this.props.id)} className="participant-column-button"><i className="material-icons">delete</i></button>
                    </td>
                </tr>)
            }
        }
    }
}
