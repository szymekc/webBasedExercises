import React, { useState } from 'react';

const GymStatus = () => {
    const [gymStatus, setGymStatus] = useState(undefined);
  
    const updateGymStatus = () => {
      const date = new Date();
      const hour = date.getHours();
      if ((hour >= 3) && (hour <= 22)) {setGymStatus('Gym is open!')}
      else setGymStatus('Gym is closed!`')
    };
  
    return (
      <div>
        <p id="demo">{gymStatus}</p>
          <button type="button" onClick={updateGymStatus}>
            is gym closed?
          </button>
      </div>
    )
  }

  export default GymStatus;