import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favouritePhoto, setFavouritePhoto] = useState(false);

  const toggleFavouritePhoto = () => {
    setFavouritePhoto((prev) => !prev);
  };

  return (
    <div onClick={toggleFavouritePhoto} className='photo-list__fav-icon'>
      <div className='photo-list__fav-icon-svg'>
        <FavIcon selected={favouritePhoto} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
