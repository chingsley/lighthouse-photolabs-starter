import { useReducer, useEffect } from "react";


const initialState = {
  displayModal: false,
  favourites: [],
  topicData: [],
  photoData: []
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, favourites: [...state.favourites, action.payload] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favourites: [...action.payload] };
    case ACTIONS.SELECT_PHOTO:
      return { ...state, displayModal: action.payload };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, displayModal: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Used to be toggleFavourite
  const updateToFavPhotoIds = (photoId) => {
    if (state.favourites.includes(photoId)) {
      const copyOfFavourites = [...state.favourites].filter(favPhotoId => favPhotoId !== photoId);
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: copyOfFavourites });
      return;
    }
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId });
  };

  const setPhotoSelected = (photoDetails) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photoDetails });
  };

  const onClosePhotoDetailsModal = (value) => {
    dispatch({ type: ACTIONS.CLOSE_MODAL, payload: value });
  };

  // Uses the same action as setting photos, no need to create a new one
  const onTopicSelect = (id) => {
    fetch(`/api/topics/photos/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    onTopicSelect
  };
};

export default useApplicationData;