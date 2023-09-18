import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className='home-route'>
      <TopNavigation
        topics={props.topics}
        isFavPhotoExist={props.favourites.length > 0}
      />
      <PhotoList
        photos={props.photos}
        favourites={props.favourites}
        toggleFavourite={props.toggleFavourite}
        setDisplayModal={props.setDisplayModal}
        viewModal={props.viewModal}
      />
    </div>
  );
};

export default HomeRoute;
