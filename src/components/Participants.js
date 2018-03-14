import React from 'react';
import Participant from './Participant';

const Participants = (props) => {
    return (              
        <div className="participants">
            <table cellSpacing="0" cellPadding="0" className="participants-table">
                <tbody>
                    <tr className="participants-table-header-row">
                        <th className="participants-table-header" onClick={props.handleSortParticipants}><b>Name  ↓</b></th>
                        <th className="participants-table-header" width="33%">Email</th>
                        <th className="participants-table-header" width="25%">Phone</th>
                        <th className="participants-table-header" width="20%"></th>
                    </tr>
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