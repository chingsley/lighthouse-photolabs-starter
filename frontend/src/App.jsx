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

  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photoId) => {
    // If it does, it will remove it from the state
    // OR
    if (favourites.includes(photoId)) {
      setFavourites((prev) => prev.filter((id) => id !== photoId));
      // OR
      // const copyOfFavourites = [...favourites].filter(
      //   (favPhotoId) => favPhotoId !== photoId
      // );
      // setFavourites(copyOfFavourites);
      return;
    }
    // Else it will add it if it doesn't exist
    setFavourites((prev) => [...prev, photoId]);
  };

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
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
      {displayModal && (
        <PhotoDetailsModal
          setDisplayModal={setDisplayModal}
          selectedPhoto={mockPhotoData.find(
            (photo) => photo.id === selectedPhotoId
          )}
          toggleFavourite={toggleFavourite}
          favourites={favourites}
        />
      )}
    </div>
  );
};

export default App;
