import { useState } from "react";


const useApplicationData = () => {
  // const [displayModal, setDisplayModal] = useState(false);

  // const [favourites, setFavourites] = useState([]);

  const [state, setState] = useState({
    displayModal: false,
    favourites: []
  });
  // Used to be toggleFavourite
  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      const copyOfFavourites = [...state.favourites].filter(favPhotoId => favPhotoId !== photoId);
      setState({ ...state, favourites: copyOfFavourites });
      return;
    }
    setState({ ...state, favourites: [...state.favourites, photoId] });
  };
  const setPhotoSelected = (photoDetails) => {
    setState({ ...state, displayModal: photoDetails });
  };
  const onClosePhotoDetailsModal = (value) => {
    setState({ ...state, displayModal: value });
  };
  return {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected
  };
};

export default useApplicationData;