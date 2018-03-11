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
                    key={participant.id}
                    name={participant.full_name}
                    email={participant.email}
                    phone={participant.phone}
                    count={index+1}
                />
            ))
            }
            </tbody>
            </table>
        </div>    
    );
};

export default Participants;