import React from 'react';
import Participant from './Participant';

const Participants = (props) => {
    return (              
        <div>
            <table border='1' width="600">
            <tbody>
            <tr><th width="150">Name</th><th width="150">Email</th><th width="150">Phone</th><th width="150"></th></tr>
            {props.data.participants.map((participant, index) => (
                <Participant
                    id={participant.id}
                    key={participant.id}
                    name={participant.full_name}
                    email={participant.email}
                    phone={participant.phone}
                    participants={props.data.participants}
                    count={index+1}
                    handleDeleteParticipant={props.handleDeleteParticipant}
                    handleEditParticipant={props.handleEditParticipant}
                />
            ))
            }
            </tbody>
            </table>
        </div>    
    );
};

export default Participants;