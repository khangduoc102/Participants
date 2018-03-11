import React from 'react';

import EditParitcipant from './EditParticipant';

const Participant = (props) => (
    <tr>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>
            <button>Edit</button>
            <button onClick={(e) => props.handleDeleteParticipant(props.id)}>Delete</button>
        </td>
    </tr>
)

export default Participant;