import React from 'react';

export default class EditParticipant extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption= (e) => {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({error}));
        
        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
        <div>
            
        </div>    
        );
    }
}