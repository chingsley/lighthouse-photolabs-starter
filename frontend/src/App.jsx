import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

import mockPhotoData from 'mocks/photos';
import mockTopicData from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  const viewModal = (photoId) => {
    setSelectedPhotoId(photoId);
    setDisplayModal(true);
  };
  return (
    <div className='App'>
      <HomeRoute
        setDisplayModal={setDisplayModal}
        photos={mockPhotoData}
        topics={mockTopicData}
        viewModal={viewModal}
      />
      {displayModal && (
        <PhotoDetailsModal
          setDisplayModal={setDisplayModal}
          selectedPhoto={mockPhotoData.find(
            (photo) => photo.id === selectedPhotoId
          )}
        />
      )}
    </div>
  );
};

export default App;
