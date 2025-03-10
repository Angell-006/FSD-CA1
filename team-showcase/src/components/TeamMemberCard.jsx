import React from "react";
import './TeamMemberCard.css'

const TeamMemberCard=({Name,JobTitle})=>{
    return (
        <div className="team-member-card">
            <h2 className="Name">{Name}</h2>
            <p>{JobTitle}</p>
            </div>
    )
}

export default TeamMemberCard;