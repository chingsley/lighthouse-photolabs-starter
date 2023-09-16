import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
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

  return (
    <div className='home-route'>
      <TopNavigation
        topics={props.topics}
        isFavPhotoExist={favourites.length > 0}
      />
      <PhotoList
        photos={props.photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        setDisplayModal={props.setDisplayModal}
      />
    </div>
  );
};

export default HomeRoute;
