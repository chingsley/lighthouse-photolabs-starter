import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

import mockPhotoData from 'mocks/photos';
import mockTopicData from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className='App'>
      <HomeRoute
        setDisplayModal={setDisplayModal}
        photos={mockPhotoData}
        topics={mockTopicData}
      />
      {displayModal && <PhotoDetailsModal setDisplayModal={setDisplayModal} />}
    </div>
  );
};

export default App;
