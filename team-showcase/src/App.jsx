import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TeamMemberCard from './components/TeamMemberCard'

const App=()=> {
  const teamMembers=[
    {
      Name:'Jhon',
      JobTitle:'Developer',
    },
    {
      Name:'Jincy',
      JobTitle:'Designer'
    },
  ];
  return(
    <div className='Team-Members-list'>
      {teamMembers.map((teamMember, index) => (
        <TeamMemberCard key={index} {...teamMember}></TeamMemberCard>
        ))}
        </div>
  )
}
export default App
