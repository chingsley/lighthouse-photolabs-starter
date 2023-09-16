import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  return (
    <ul className='photo-list'>
      {props.photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          imageSource={photo.urls.regular}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
