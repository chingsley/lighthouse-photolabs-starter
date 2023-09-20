import React from 'react';
import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import mockPhotoData from 'mocks/photos';
import mockTopicData from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
  } = useApplicationData();

  return (
    <div className='App'>
      <HomeRoute
        photos={mockPhotoData}
        topics={mockTopicData}
        setDisplayModal={setPhotoSelected}
        favourites={state.favourites}
        toggleFavourite={updateToFavPhotoIds}
      />
      {state.displayModal && (
        <PhotoDetailsModal
          closeDisplayModal={onClosePhotoDetailsModal}
          singlePhotoDetail={state.displayModal}
          toggleFavourite={updateToFavPhotoIds}
          favourites={state.favourites}
        />
      )}
    </div>
  );
};

export default App;
