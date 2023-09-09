import { useState } from "react"

export default function Team() {
    const [teamCount, setTeamCount] = useState(11);

    const handleAdd = () => {
        const nweTeamCount = teamCount + 1;
        setTeamCount(nweTeamCount);
    }

    const handleRemove = () => {
        setTeamCount(teamCount-1);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Player: {teamCount}</h3>
            <button onClick={handleAdd}>Add Team</button>
            <button onClick={handleRemove}>Team Remove</button>
        </div>
    )
}