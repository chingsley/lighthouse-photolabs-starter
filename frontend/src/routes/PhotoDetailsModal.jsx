import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  // console.log('>>>>>>>>', props.selectedPhoto); // this will be logged twice due to <React.StrictMode> in index.jsx
  return (
    <div className='photo-details-modal'>
      <button
        className='photo-details-modal__close-button'
        onClick={() => props.setDisplayModal(false)}
      >
        <img src={closeSymbol} alt='close symbol' />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton
          toggleFavourite={props.toggleFavourite}
          photoId={props.selectedPhoto.id}
          favourites={props.favourites}
        />
        <img
          // onClick={() => props.setDisplayModal(props.singlePhotoDetail)}
          className='photo-details-modal__image'
          src={props.selectedPhoto.urls.full}
        />
        <div className='photo-details-modal__photographer-details'>
          <img
            className='photo-details-modal__photographer-profile'
            src={props.selectedPhoto.user.profile}
          />
          <div className='photo-details-modal__photographer-info'>
            {props.selectedPhoto.user.name}
            <div className='photo-details-modal__photographer-location'>
              {props.selectedPhoto.location.city},
              {props.selectedPhoto.location.country}
            </div>
          </div>
        </div>
        <div className='photo-details-modal__header'>Similar Photos</div>
        <div className='photo-details-modal__images'>
          {
            <PhotoList
              photos={Object.values(props.selectedPhoto.similar_photos)}
              favourites={props.favourites}
              toggleFavourite={props.toggleFavourite}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
