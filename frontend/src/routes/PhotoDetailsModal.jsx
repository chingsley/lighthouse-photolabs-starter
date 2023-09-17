import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  console.log('>>>>>>>>', props.selectedPhoto); // this will be logged twice due to <React.StrictMode> in index.jsx
  return (
    <div className='photo-details-modal'>
      <button
        className='photo-details-modal__close-button'
        onClick={() => props.setDisplayModal(false)}
      >
        <img src={closeSymbol} alt='close symbol' />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
