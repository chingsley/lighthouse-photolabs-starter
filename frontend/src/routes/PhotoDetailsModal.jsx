import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  // console.log('>>>>>>>>', props.singlePhotoDetail); // this will be logged twice due to <React.StrictMode> in index.jsx
  return (
    <div className='photo-details-modal'>
      <button
        className='photo-details-modal__close-button'
        onClick={() => props.closeDisplayModal(false)}
      >
        <img src={closeSymbol} alt='close symbol' />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton
          toggleFavourite={props.toggleFavourite}
          photoId={props.singlePhotoDetail.id}
          favourites={props.favourites}
        />
        <img
          // onClick={() => props.setDisplayModal(props.singlePhotoDetail)}
          className='photo-details-modal__image'
          src={props.singlePhotoDetail.urls.full}
        />
        <div className='photo-details-modal__photographer-details'>
          <img
            className='photo-details-modal__photographer-profile'
            src={props.singlePhotoDetail.user.profile}
          />
          <div className='photo-details-modal__photographer-info'>
            {props.singlePhotoDetail.user.name}
            <div className='photo-details-modal__photographer-location'>
              {props.singlePhotoDetail.location.city},
              {props.singlePhotoDetail.location.country}
            </div>
          </div>
        </div>
        <div className='photo-details-modal__header'>Similar Photos</div>
        <div className='photo-details-modal__images'>
          {
            <PhotoList
              photos={Object.values(props.singlePhotoDetail.similar_photos)}
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
