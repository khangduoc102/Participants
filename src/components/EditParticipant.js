import React from 'react';

export default class EditParticipant extends React.Component {
    state = {
        error: undefined
    }
    handleEditParticipant= (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value.trim();
        const email = e.target.elements.email.value.trim();
        const phone = e.target.elements.phone.value.trim();

        
        const error = this.props.handleEditParticipant(this.props.data.id, name, email, phone);
        
        this.props.handleToggle();

        this.setState(() => ({error}));
    }

    render() {
        return (
            <tr height="72px">                           
                <td colSpan="4" className="edit-participant">
                    <form  onSubmit={this.handleEditParticipant} className="edit-participant-form">
                        <input type="text" defaultValue={this.props.data.name} name="name" className="edit-participant-form-input" size="14"/>
                        <input type="text" defaultValue={this.props.data.email} name="email" className="edit-participant-form-input" size="30"/>
                        <input type="text" defaultValue={this.props.data.phone} name="phone" className="edit-participant-form-input" size="18"/>
                            
                        <button onClick={this.props.handleToggle} className="edit-participant-cancel-button">Cancel</button>
                        <button className="edit-participant-save-button">Save</button> 
                    </form>
                </td>
                {this.state.error && <p>{this.state.error}</p>}
        </tr>
        );
    }
}