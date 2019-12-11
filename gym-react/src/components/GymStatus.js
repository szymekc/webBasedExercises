import React, { useState } from 'react';
import SimplePopup from './SimplePopup';
const GymStatus = () => {
  const [gymStatus, setGymStatus] = useState(undefined);
  const [openPopup, setOpenPopup] = useState(false);

  const updateGymStatus = () => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 3 && hour <= 22) {
      setGymStatus('Gym is open!');
    } else setGymStatus('Gym is closed!`');
    setOpenPopup(true);
  };

  return (
    <div>
      <SimplePopup
        title={'Gym status'}
        open={openPopup}
        info={gymStatus}
        onClose={() => setOpenPopup(false)}
      />

      <button type="button" onClick={updateGymStatus}>
        is gym closed?
      </button>
    </div>
  );
};

export default GymStatus;
