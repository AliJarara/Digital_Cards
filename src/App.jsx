import React from 'react';
import DigitalCard from './components/DigitalCard';
import { teamMembers } from './data/team';

function App() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <DigitalCard
            key={member.id}
            {...member}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
