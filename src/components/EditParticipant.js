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
            <tr>    
                          
                <td colSpan="4">
                <div>
                    <form  onSubmit={this.handleEditParticipant}>
                        <input type="text" defaultValue={this.props.data.name} name="name"/>
                        <input type="text" defaultValue={this.props.data.email} name="email"/>
                        <input type="text" defaultValue={this.props.data.phone} name="phone"/>
                                 
                        <button>Save</button>
                        <button onClick={this.props.handleToggle}>Cancel</button>
                    </form>
                    </div>
                </td>
                {this.state.error && <p>{this.state.error}</p>}
        </tr>
        );
    }
}