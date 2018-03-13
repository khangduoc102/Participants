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
                return ( <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.email}</td>
                    <td>{this.props.phone}</td>
                    <td>
                        <button onClick={this.handleToggle}>Edit</button>
                        <button onClick={(e) => this.props.handleDeleteParticipant(this.props.id)}>Delete</button>
                    </td>
                </tr>)
            }
        }
    }
}
